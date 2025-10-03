import React from "react";
import { ShieldCheck, Zap, BadgeCheck, Award, ChevronLeft, Gift, Tags, Percent } from "lucide-react";
import { motion } from "framer-motion";

/*
  ServiceCardA (Premium v2) — Palette update only
  - المطلوب: تغيير الألوان والتدرجات فقط لتتطابق مع بطاقة I
  - لا تغيير في التخطيط أو الأبعاد أو المحتوى
  - يعتمد على لوحة الألوان الدافئة لبطاقة I (Desert Sand / Burnished Bronze)
*/

const ServiceCardA = () => {
  return (
    <div
      data-testid="service-card-a"
      className="relative w-[370px] max-w-[370px] min-w-[370px] h-[620px] min-h-[620px] max-h-[620px] rounded-[20px] overflow-hidden"
      style={{
        // خلفية مطابقة لبطاقة I
        background:
          "radial-gradient(1000px 360px at 120% -10%, rgba(245,158,11,0.12) 0%, rgba(253,230,138,0.10) 28%, transparent 65%), linear-gradient(135deg, #FFF8ED 0%, #FCEFDA 55%, #F6E5CB 100%)",
        boxShadow:
          "0 18px 48px rgba(124,45,18,0.12), inset 0 1px 0 rgba(255,255,255,0.95)",
      }}
    >
      {/* إطار زخرفي مع تونات برونزية */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[20px]"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(181,129,46,0.20), inset 0 0 0 2px rgba(214,167,86,0.18), 0 12px 40px rgba(124,45,18,0.12)",
        }}
      />

      {/* دبابيس الزوايا */}
      <div aria-hidden className="absolute inset-0">
        {[
          "top-0 left-0",
          "top-0 right-0",
          "bottom-0 left-0",
          "bottom-0 right-0",
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} m-[10px] w-4 h-4 rounded-sm`}
            style={{
              background: 
                "linear-gradient(135deg, rgba(214, 167, 86, 0.15) 0%, rgba(180, 83, 9, 0.25) 50%, rgba(214, 167, 86, 0.15) 100%), linear-gradient(180deg, #2A2418 0%, #1F1910 100%)",
              border: "2px solid #D6A756",
              boxShadow: 
                "0 0 10px rgba(214, 167, 86, 0.6), 0 0 20px rgba(214, 167, 86, 0.4), 0 0 30px rgba(214, 167, 86, 0.3), 0 0 40px rgba(214, 167, 86, 0.2), 0 4px 15px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          />
        ))}
      </div>

      {/* عمود معدني محسّن (احترافي للغاية) */}
      <div
        aria-hidden
        className="absolute top-4 bottom-4 right-5 rounded-full"
        style={{ width: '3px', opacity: 0.95 }}
      >
        {/* هالة اندماج ناعمة */}
        <span
          aria-hidden
          className="absolute -inset-[3px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(214,167,86,0.18), rgba(180,83,9,0.08))",
            filter: "blur(3px)",
          }}
        />
        {/* جسم العمود الأسطواني (تدرجات متعددة لتعزيز الواقعية) */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, #EBCB88 0%, #C99843 50%, #B9852F 80%, #E6C07A 100%), \
               linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.35) 28%, rgba(0,0,0,0.08) 52%, rgba(255,255,255,0.55) 100%)",
            backgroundBlendMode: 'overlay, normal',
            boxShadow:
              "0 8px 18px rgba(212,175,55,0.18), inset 0 1px 0 rgba(255,255,255,0.85)",
            border: "1px solid rgba(214,167,86,0.35)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)",
            filter: "saturate(105%) brightness(102%)",
          }}
        />
        {/* لمعة طولية ناعمة */}
        <span
          aria-hidden
          className="absolute inset-[1px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.25) 100%)",
            mixBlendMode: "screen",
            opacity: 0.65,
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        />
        {/* نسيج معدني ميكروي خفيف جداً لإحساس فويل (بدون تشويش بصري) */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "repeating-linear-gradient(180deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
            opacity: 0.15,
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        />
      </div>

      {/* الشريط العلوي - عنوان فرعي + عنوان */}
      <div className="relative z-10 px-6 pt-6" dir="rtl">
        <div className="flex items-center justify-between mb-3">
          <button
            type="button"
            aria-label=""
            data-testid="service-card-a-subtitle"
            className="inline-flex items-center gap-1 rounded-full text-[12px] font-extrabold tracking-wide"
            style={{
              color: "#3F2D17",
              background: "linear-gradient(180deg, #FFE9C2 0%, #F8DDA6 100%)",
              boxShadow:
                "0 2px 6px rgba(120,53,15,0.18), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 2px 8px rgba(0,0,0,0.08), inset 0 -1px 0 rgba(255,255,255,0.6)",
              border: "1px solid rgba(214,167,86,0.45)",
              padding: "8px 14px",
              minWidth: "72px",
              minHeight: "30px",
              position: "relative",
              overflow: "hidden",
              transform: "translateX(-4px)"
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "9999px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.38), rgba(255,255,255,0.08))",
                mixBlendMode: "screen",
                opacity: 0.85,
                pointerEvents: "none"
              }}
            />
            <span
              aria-hidden
              style={{
                position: "absolute",
                inset: "2px",
                borderRadius: "9999px",
                boxShadow: "inset 2px 2px 5px rgba(255,255,255,0.35), inset -2px -2px 6px rgba(0,0,0,0.08)",
                pointerEvents: "none"
              }}
            />
            <span
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "9999px",
                background: "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
                opacity: 0.10,
                filter: "saturate(110%)",
                pointerEvents: "none"
              }}
            />
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: "2px",
                left: "8px",
                width: "42%",
                height: "38%",
                borderRadius: "9999px",
                transform: "rotate(-18deg)",
                background: "linear-gradient(90deg, rgba(255,255,255,0.45), rgba(255,255,255,0))",
                filter: "blur(1px)",
                opacity: 0.65,
                pointerEvents: "none"
              }}
            />
          </button>
          <div
            aria-hidden
            className="h-px flex-1 mx-4"
            style={{
              background:
                "linear-gradient(90deg, transparent, #7C5D13, transparent)",
            }}
          />
          <span className="text-[11px] text-gray-400/80 font-semibold">CARD A</span>
        </div>

        <h3
          data-testid="service-card-a-title"
          className="mt-6 text-[26px] leading-tight font-black tracking-tight"
          style={{
            color: "#3F2D17",
            textShadow: "0 1px 0 rgba(255,255,255,0.65)",
          }}
        >
          بطائق الكترونية
        </h3>
      </div>

      {/* الجسم المقسوم: سكة معلومات يمين + سطح بطولي يسار */}
      <div className="relative z-10 grid grid-cols-[1fr_1.05fr] gap-0 px-6 mt-4" dir="rtl">
        {/* يمين: كتل المعلومات */}
        <div
          data-testid="service-card-a-info"
          className="flex flex-col gap-3 pr-1"
        >
          {/* كتلة 1 - فئات متعددة */}
          <div
            className="rounded-xl p-3 pb-5 cursor-pointer transition-all duration-300 ease-out hover:scale-105 active:scale-98"
            style={{
              background: "rgba(255,255,255,0.85)",
              boxShadow:
                "0 4px 12px rgba(120,53,15,0.08), 0 2px 6px rgba(120,53,15,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
              border: "1px solid rgba(214,167,86,0.45)",
              transform: "translateZ(0)",
              willChange: "transform"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(120,53,15,0.18), 0 4px 12px rgba(120,53,15,0.12), inset 0 1px 0 rgba(255,255,255,0.95), 0 0 0 2px rgba(214,167,86,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(120,53,15,0.08), 0 2px 6px rgba(120,53,15,0.06), inset 0 1px 0 rgba(255,255,255,0.95)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(120,53,15,0.12), inset 0 1px 3px rgba(120,53,15,0.15), inset 0 1px 0 rgba(255,255,255,0.95)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(120,53,15,0.18), 0 4px 12px rgba(120,53,15,0.12), inset 0 1px 0 rgba(255,255,255,0.95), 0 0 0 2px rgba(214,167,86,0.25)";
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#3F2D17" }}>فئات متعددة:</div>
            <div className="text-[12px] mt-0.5 leading-relaxed font-semibold" style={{ color: "#6B4E2E" }}>مجموعة واسعة من البطاقات الإلكترونية مسبقة الدفع تشمل: بطاقات مالية، بطاقات ألعاب، وبطاقات تسوق للمتاجر الإلكترونية العالمية</div>
          </div>
          
          {/* كتلة 2 - توافق عالمي */}
          <div
            className="rounded-xl p-3 cursor-pointer transition-all duration-300 ease-out hover:scale-105 active:scale-98"
            style={{
              background: "rgba(255,255,255,0.85)",
              boxShadow:
                "0 4px 12px rgba(120,53,15,0.08), 0 2px 6px rgba(120,53,15,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
              border: "1px solid rgba(214,167,86,0.45)",
              transform: "translateZ(0)",
              willChange: "transform"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(120,53,15,0.18), 0 4px 12px rgba(120,53,15,0.12), inset 0 1px 0 rgba(255,255,255,0.95), 0 0 0 2px rgba(214,167,86,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(120,53,15,0.08), 0 2px 6px rgba(120,53,15,0.06), inset 0 1px 0 rgba(255,255,255,0.95)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(120,53,15,0.12), inset 0 1px 3px rgba(120,53,15,0.15), inset 0 1px 0 rgba(255,255,255,0.95)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(120,53,15,0.18), 0 4px 12px rgba(120,53,15,0.12), inset 0 1px 0 rgba(255,255,255,0.95), 0 0 0 2px rgba(214,167,86,0.25)";
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#3F2D17" }}>توافق عالمي:</div>
            <div className="text-[12px] leading-relaxed font-semibold" style={{ color: "#6B4E2E" }}>متوافقة مع جميع المنصات الرقمية، التطبيقات، والمواقع الإلكترونية حول العالم</div>
          </div>
        </div>

        {/* يسار: سطح بطولي مع أقواس ناعمة (ألوان برونزية) - تم تقصيره */}
        <div 
          className="relative cursor-pointer transition-all duration-300 ease-out hover:scale-105 active:scale-98" 
          style={{ transform: "translateZ(0)", willChange: "transform" }}
          onMouseEnter={(e) => {
            const bgDiv = e.currentTarget.querySelector('.surface-bg');
            if (bgDiv) {
              bgDiv.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.65), 0 12px 32px rgba(124,45,18,0.22), 0 6px 20px rgba(124,45,18,0.16), 0 0 0 2px rgba(214,167,86,0.35)";
              bgDiv.style.borderColor = "rgba(214,167,86,0.55)";
            }
          }}
          onMouseLeave={(e) => {
            const bgDiv = e.currentTarget.querySelector('.surface-bg');
            if (bgDiv) {
              bgDiv.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.65), 0 6px 18px rgba(124,45,18,0.12), 0 3px 10px rgba(124,45,18,0.08)";
              bgDiv.style.borderColor = "rgba(214,167,86,0.30)";
            }
          }}
          onMouseDown={(e) => {
            const bgDiv = e.currentTarget.querySelector('.surface-bg');
            if (bgDiv) {
              bgDiv.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.65), 0 3px 12px rgba(124,45,18,0.18), inset 0 2px 8px rgba(124,45,18,0.12)";
            }
          }}
          onMouseUp={(e) => {
            const bgDiv = e.currentTarget.querySelector('.surface-bg');
            if (bgDiv) {
              bgDiv.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.65), 0 12px 32px rgba(124,45,18,0.22), 0 6px 20px rgba(124,45,18,0.16), 0 0 0 2px rgba(214,167,86,0.35)";
            }
          }}
        >
          <div
            aria-hidden
            className="surface-bg absolute inset-0 rounded-xl transition-all duration-300"
            style={{
              background:
                "radial-gradient(420px 220px at 0% 10%, rgba(214,167,86,0.18), transparent 60%), radial-gradient(420px 220px at 120% 90%, rgba(245,158,11,0.12), transparent 60%)",
              border: "1px solid rgba(214,167,86,0.30)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.65), 0 6px 18px rgba(124,45,18,0.12), 0 3px 10px rgba(124,45,18,0.08)",
              pointerEvents: "none"
            }}
          />

          <div className="relative z-10 h-full flex flex-col justify-between p-4 pb-16">
            {/* أقواس زخرفية + أيقونات موزعة دائريًا */}
            <div className="flex items-start justify-center pr-0 pt-12">
              <div className="relative w-20 h-20">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="absolute inset-0 rounded-full"
                    style={{
                      transform: `scale(${1 + i * 0.18})`,
                      boxShadow:
                        "0 0 0 1px rgba(214,167,86,0.25), 0 0 40px rgba(180,83,9,0.10)",
                    }}
                  />
                ))}

                {/* أيقونات الهدايا/العروض/الخصومات موزعة على محيط الدوائر */}
                {[
                  { Icon: Gift, angle: 0, testid: 'service-card-a-arc-icon-gift', label: 'هدايا' },
                  { Icon: Tags, angle: 120, testid: 'service-card-a-arc-icon-offers', label: 'عروض' },
                  { Icon: Percent, angle: 240, testid: 'service-card-a-arc-icon-discount', label: 'خصم' },
                ].map(({ Icon, angle, testid, label }, idx) => (
                  <span
                    key={idx}
                    data-testid={testid}
                    className="absolute top-1/2 left-1/2"
                    style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(48px) rotate(${-angle}deg)` }}
                  >
                    <span className="flex flex-col items-center gap-1">
                      <span
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full"
                        style={{
                          background: "rgba(255, 255, 255, 0.98)",
                          border: "1px solid rgba(214,167,86,0.25)",
                          boxShadow: "0 4px 12px rgba(120,53,15,0.15), 0 2px 6px rgba(120,53,15,0.10), inset 0 1px 0 rgba(255,255,255,1)",
                        }}
                      >
                        <Icon 
                          size={18} 
                          style={{
                            color: "#8B6914",
                            strokeWidth: 1.5,
                          }}
                        />
                      </span>
                      <span 
                        className="text-[10px] font-bold whitespace-nowrap"
                        style={{ 
                          color: "#3F2D17",
                          textShadow: "0 1px 2px rgba(255,255,255,0.8)"
                        }}
                      >
                        {label}
                      </span>
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* زر المزيد المحفور - نفس تصميم زر التحميل */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <button
              type="button"
              data-testid="service-card-a-cta-button"
              className="service-card-a-more-btn group relative inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-wider uppercase transition-all duration-200 ease-out"
            >
              <span className="relative z-10">المزيد</span>
              <ChevronLeft size={11} className="relative z-10 opacity-65 group-hover:opacity-90 transition-opacity duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* كتلة 3 - باقات متنوعة - الآن على كامل العرض */}
      <div className="relative z-10 px-6 mt-3" dir="rtl">
        <div
          className="rounded-xl p-3 text-center cursor-pointer transition-all duration-300 ease-out hover:scale-105 active:scale-98"
          style={{
            background:
              "linear-gradient(180deg, rgba(214,167,86,0.18), rgba(245,158,11,0.12))",
            border: "1px dashed #D6A756",
            boxShadow: "0 4px 14px rgba(180,83,9,0.12), 0 2px 8px rgba(180,83,9,0.08)",
            transform: "translateZ(0)",
            willChange: "transform"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 28px rgba(180,83,9,0.24), 0 6px 16px rgba(180,83,9,0.16), 0 0 0 2px rgba(214,167,86,0.35)";
            e.currentTarget.style.borderColor = "#FFD88A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(180,83,9,0.12), 0 2px 8px rgba(180,83,9,0.08)";
            e.currentTarget.style.borderColor = "#D6A756";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.boxShadow = "0 2px 10px rgba(180,83,9,0.18), inset 0 2px 6px rgba(180,83,9,0.15)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 28px rgba(180,83,9,0.24), 0 6px 16px rgba(180,83,9,0.16), 0 0 0 2px rgba(214,167,86,0.35)";
          }}
        >
          <div className="text-[13px] font-extrabold" style={{ color: "#3F2D17" }}>باقات متنوعة</div>
        </div>
      </div>

      {/* فاصل */}
      <div className="px-6 mt-8" aria-hidden>
        <div
          className="h-[2px] w-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #7C5D13, #7C5D13, transparent)",
          }}
        />
      </div>

      {/* أيقونات المزايا */}
      <div
        data-testid="service-card-a-features"
        className="grid grid-cols-4 gap-2 text-center px-6 pt-1.5" dir="rtl"
      >
        {/* Security */}
        <motion.div 
          className="flex flex-col items-center gap-1"
        >
          <motion.span
            className="inline-flex items-center justify-center w-9 h-9 rounded-full relative"
            style={{
              background: "linear-gradient(145deg, #ffffff, #f8f8f8)",
              boxShadow: 
                "0 8px 16px rgba(0, 0, 0, 0.12), " +
                "0 4px 8px rgba(0, 0, 0, 0.08), " +
                "0 2px 4px rgba(0, 0, 0, 0.06), " +
                "inset 0 1px 0 rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(214,167,86,0.2)",
            }}
            data-testid="service-card-a-feature-security"
            initial={{ opacity: 0, y: 30, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.0,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
              scale: { 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                restDelta: 0.001
              }
            }}
            whileHover={{
              boxShadow: [
                "0 8px 16px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
                "0 12px 24px rgba(37, 99, 235, 0.15), 0 6px 12px rgba(37, 99, 235, 0.12), 0 3px 6px rgba(37, 99, 235, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 2px rgba(37, 99, 235, 0.2)"
              ],
              y: -3,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0, 
                rotate: -180,
                y: -20
              }}
              animate={{ 
                opacity: 1,
                scale: [0, 1.3, 0.9, 1.1, 1],
                rotate: 0,
                y: 0
              }}
              transition={{ 
                delay: 1.3,
                duration: 0.8,
                opacity: { duration: 0.3, ease: "easeOut" },
                scale: { 
                  duration: 0.8,
                  times: [0, 0.4, 0.6, 0.85, 1],
                  ease: [0.68, -0.55, 0.265, 1.55]
                },
                rotate: { 
                  duration: 0.6, 
                  ease: [0.34, 1.56, 0.64, 1]
                },
                y: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              whileHover={{ 
                scale: 1.4,
                rotate: [0, -8, 8, -8, 8, 0],
                y: -2,
                transition: { 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.85,
                transition: { duration: 0.1 }
              }}
            >
              <ShieldCheck 
                size={18} 
                className="text-blue-600"
                style={{
                  filter: `
                    drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.5))
                    drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.3))
                    drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.2))
                    drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.15))
                  `,
                  transform: 'translateZ(0)',
                  cursor: 'pointer',
                }}
              />
            </motion.div>
          </motion.span>
          <motion.span 
            className="text-[11px] font-extrabold" 
            style={{ color: "#3F2D17" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            أمان
          </motion.span>
        </motion.div>
        {/* Speed */}
        <motion.div 
          className="flex flex-col items-center gap-1"
        >
          <motion.span
            className="inline-flex items-center justify-center w-9 h-9 rounded-full relative"
            style={{
              background: "linear-gradient(145deg, #ffffff, #f8f8f8)",
              boxShadow: 
                "0 8px 16px rgba(0, 0, 0, 0.12), " +
                "0 4px 8px rgba(0, 0, 0, 0.08), " +
                "0 2px 4px rgba(0, 0, 0, 0.06), " +
                "inset 0 1px 0 rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(214,167,86,0.2)",
            }}
            data-testid="service-card-a-feature-speed"
            initial={{ opacity: 0, y: 30, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.0,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              scale: { 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                restDelta: 0.001
              }
            }}
            whileHover={{
              boxShadow: [
                "0 8px 16px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
                "0 12px 24px rgba(22, 163, 74, 0.15), 0 6px 12px rgba(22, 163, 74, 0.12), 0 3px 6px rgba(22, 163, 74, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 2px rgba(22, 163, 74, 0.2)"
              ],
              y: -3,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0, 
                rotate: -180,
                y: -20
              }}
              animate={{ 
                opacity: 1,
                scale: [0, 1.3, 0.9, 1.1, 1],
                rotate: 0,
                y: 0
              }}
              transition={{ 
                delay: 1.5,
                duration: 0.8,
                opacity: { duration: 0.3, ease: "easeOut" },
                scale: { 
                  duration: 0.8,
                  times: [0, 0.4, 0.6, 0.85, 1],
                  ease: [0.68, -0.55, 0.265, 1.55]
                },
                rotate: { 
                  duration: 0.6, 
                  ease: [0.34, 1.56, 0.64, 1]
                },
                y: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              whileHover={{ 
                scale: 1.4,
                rotate: [0, -8, 8, -8, 8, 0],
                y: -2,
                transition: { 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.85,
                transition: { duration: 0.1 }
              }}
            >
              <Zap 
                size={18} 
                className="text-green-600"
                style={{
                  filter: `
                    drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.5))
                    drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.3))
                    drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.2))
                    drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.15))
                  `,
                  transform: 'translateZ(0)',
                  cursor: 'pointer',
                }}
              />
            </motion.div>
          </motion.span>
          <span className="text-[11px] font-extrabold" style={{ color: "#3F2D17" }}>سرعة</span>
        </motion.div>
        {/* Trust */}
        <motion.div 
          className="flex flex-col items-center gap-1"
        >
          <motion.span
            className="inline-flex items-center justify-center w-9 h-9 rounded-full relative"
            style={{
              background: "linear-gradient(145deg, #ffffff, #f8f8f8)",
              boxShadow: 
                "0 8px 16px rgba(0, 0, 0, 0.12), " +
                "0 4px 8px rgba(0, 0, 0, 0.08), " +
                "0 2px 4px rgba(0, 0, 0, 0.06), " +
                "inset 0 1px 0 rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(214,167,86,0.2)",
            }}
            data-testid="service-card-a-feature-trust"
            initial={{ opacity: 0, y: 30, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.0,
              delay: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              scale: { 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                restDelta: 0.001
              }
            }}
            whileHover={{
              boxShadow: [
                "0 8px 16px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
                "0 12px 24px rgba(147, 51, 234, 0.15), 0 6px 12px rgba(147, 51, 234, 0.12), 0 3px 6px rgba(147, 51, 234, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 2px rgba(147, 51, 234, 0.2)"
              ],
              y: -3,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0, 
                rotate: -180,
                y: -20
              }}
              animate={{ 
                opacity: 1,
                scale: [0, 1.3, 0.9, 1.1, 1],
                rotate: 0,
                y: 0
              }}
              transition={{ 
                delay: 1.7,
                duration: 0.8,
                opacity: { duration: 0.3, ease: "easeOut" },
                scale: { 
                  duration: 0.8,
                  times: [0, 0.4, 0.6, 0.85, 1],
                  ease: [0.68, -0.55, 0.265, 1.55]
                },
                rotate: { 
                  duration: 0.6, 
                  ease: [0.34, 1.56, 0.64, 1]
                },
                y: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              whileHover={{ 
                scale: 1.4,
                rotate: [0, -8, 8, -8, 8, 0],
                y: -2,
                transition: { 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.85,
                transition: { duration: 0.1 }
              }}
            >
              <BadgeCheck 
                size={18} 
                className="text-purple-600"
                style={{
                  filter: `
                    drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.5))
                    drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.3))
                    drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.2))
                    drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.15))
                  `,
                  transform: 'translateZ(0)',
                  cursor: 'pointer',
                }}
              />
            </motion.div>
          </motion.span>
          <span className="text-[11px] font-extrabold" style={{ color: "#3F2D17" }}>ثقة</span>
        </motion.div>
        {/* Quality */}
        <motion.div 
          className="flex flex-col items-center gap-1"
        >
          <motion.span
            className="inline-flex items-center justify-center w-9 h-9 rounded-full relative"
            style={{
              background: "linear-gradient(145deg, #ffffff, #f8f8f8)",
              boxShadow: 
                "0 8px 16px rgba(0, 0, 0, 0.12), " +
                "0 4px 8px rgba(0, 0, 0, 0.08), " +
                "0 2px 4px rgba(0, 0, 0, 0.06), " +
                "inset 0 1px 0 rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(214,167,86,0.2)",
            }}
            data-testid="service-card-a-feature-quality"
            initial={{ opacity: 0, y: 30, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.0,
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94],
              scale: { 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                restDelta: 0.001
              }
            }}
            whileHover={{
              boxShadow: [
                "0 8px 16px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
                "0 12px 24px rgba(217, 119, 6, 0.15), 0 6px 12px rgba(217, 119, 6, 0.12), 0 3px 6px rgba(217, 119, 6, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 2px rgba(217, 119, 6, 0.2)"
              ],
              y: -3,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0, 
                rotate: -180,
                y: -20
              }}
              animate={{ 
                opacity: 1,
                scale: [0, 1.3, 0.9, 1.1, 1],
                rotate: 0,
                y: 0
              }}
              transition={{ 
                delay: 1.9,
                duration: 0.8,
                opacity: { duration: 0.3, ease: "easeOut" },
                scale: { 
                  duration: 0.8,
                  times: [0, 0.4, 0.6, 0.85, 1],
                  ease: [0.68, -0.55, 0.265, 1.55]
                },
                rotate: { 
                  duration: 0.6, 
                  ease: [0.34, 1.56, 0.64, 1]
                },
                y: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              whileHover={{ 
                scale: 1.4,
                rotate: [0, -8, 8, -8, 8, 0],
                y: -2,
                transition: { 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.85,
                transition: { duration: 0.1 }
              }}
            >
              <Award 
                size={18} 
                className="text-amber-600"
                style={{
                  filter: `
                    drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.5))
                    drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.3))
                    drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.2))
                    drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.15))
                  `,
                  transform: 'translateZ(0)',
                  cursor: 'pointer',
                }}
              />
            </motion.div>
          </motion.span>
          <span className="text-[11px] font-extrabold" style={{ color: "#3F2D17" }}>جودة</span>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCardA;