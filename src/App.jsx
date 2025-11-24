import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import pptxgen from 'pptxgenjs';
import Slide from './components/Slide';
import { slidesData } from './data/slides';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const slidesRef = useRef([]);
  const swiperRef = useRef(null);

  const downloadPDF = async () => {
    setIsExporting(true);
    const pdf = new jsPDF('landscape', 'mm', 'a4');
    const slideElements = document.querySelectorAll('.slide-content');
    
    for (let i = 0; i < slideElements.length; i++) {
      const element = slideElements[i];
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 297;
      const imgHeight = 210;
      
      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    }
    
    pdf.save('AI-Detection-Presentation.pdf');
    setIsExporting(false);
  };

  const downloadPPT = async () => {
    setIsExporting(true);
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    
    for (const slide of slidesData) {
      const pptSlide = pptx.addSlide();
      
      pptSlide.background = { fill: 'FFFFFF' };
      
      const titleOptions = {
        x: 0.5,
        y: 0.5,
        w: 9,
        h: 1.5,
        fontSize: 36,
        bold: true,
        color: '363636',
        align: 'center'
      };
      
      if (slide.title) {
        pptSlide.addText(slide.title, titleOptions);
      }
      
      if (slide.type === 'cover') {
        if (slide.subtitle) {
          pptSlide.addText(slide.subtitle, {
            x: 0.5,
            y: 2,
            w: 9,
            h: 1,
            fontSize: 28,
            color: 'EF4444',
            align: 'center'
          });
        }
        
        if (slide.description) {
          pptSlide.addText(slide.description, {
            x: 1,
            y: 3.5,
            w: 8,
            h: 2,
            fontSize: 14,
            color: '666666',
            align: 'center'
          });
        }
      }
      
      if (slide.content?.main) {
        pptSlide.addText(slide.content.main, {
          x: 1,
          y: 2.5,
          w: 8,
          h: 3,
          fontSize: 14,
          color: '4B5563'
        });
      }
    }
    
    await pptx.writeFile({ fileName: 'AI-Detection-Presentation.pptx' });
    setIsExporting(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight' && swiperRef.current) {
      swiperRef.current.slideNext();
    } else if (e.key === 'ArrowLeft' && swiperRef.current) {
      swiperRef.current.slidePrev();
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      <div className="absolute top-4 right-4 z-50 flex gap-3">
        <button
          onClick={toggleFullscreen}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
          title="按 F 鍵全屏"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          全屏
        </button>
        
        <button
          onClick={downloadPDF}
          disabled={isExporting}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          下載 PDF
        </button>
        
        <button
          onClick={downloadPPT}
          disabled={isExporting}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          下載 PPT
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 bg-gray-800/90 backdrop-blur px-4 py-2 rounded-full">
        <p className="text-white text-sm">
          {currentSlide + 1} / {slidesData.length} · 使用方向鍵切換投影片
        </p>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Keyboard, Mousewheel]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          }
        }}
        navigation={true}
        keyboard={{
          enabled: true
        }}
        mousewheel={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        onSwiper={(swiper) => swiperRef.current = swiper}
        className="w-full h-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="slide-content w-full h-full"
              ref={el => slidesRef.current[index] = el}
            >
              <Slide slide={slide} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-pagination {
          bottom: 60px !important;
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          color: rgba(255, 255, 255, 0.8) !important;
          background: rgba(0, 0, 0, 0.3);
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px !important;
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.5);
          color: white !important;
        }
        
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default App;