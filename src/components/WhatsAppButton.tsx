const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/923466617785?text=Hello%20Skewer%20POS%20Team%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20restaurant%20POS%20system.";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[999] flex items-center group pointer-events-auto">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 bg-slate-900/95 text-white text-xs font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap backdrop-blur-md border border-slate-700">
        Chat with us on WhatsApp 👋
      </span>

      {/* Simple Square WhatsApp Action Button with Rounded Corners - No Breathing/Bounce Motion */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Skewer POS Team"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-[#25D366]/30 border-2 border-white transition-all duration-200 cursor-pointer hover:shadow-xl active:scale-95"
      >
        {/* WhatsApp Official SVG Icon */}
        <svg 
          viewBox="0 0 32 32" 
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A14 14 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.4 1.1 1.2-4.2-.3-.4A11.5 11.5 0 1 1 16 27.5zm6.3-8.6c-.3-.2-2-.1-2.3-1.1-.3-.2-.5-.3-.7.1s-.8 1-1 1.2c-.2.2-.4.2-.7.1a9.2 9.2 0 0 1-4.7-4.1c-.2-.4 0-.6.2-.8l.5-.6c.2-.2.2-.4.3-.6 0-.2 0-.4-.1-.6l-1-2.4c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.7.1-1.1.5-.4.5-1.5 1.5-1.5 3.6s1.6 4.2 1.8 4.5c.2.3 3.1 4.7 7.5 6.6 1 .5 1.9.7 2.5.9 1.1.3 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2.1.3-2.3-.1-.2-.3-.3-.6-.5z"/>
        </svg>

        {/* Online Green Indicator Dot */}
        <span className="absolute top-1 right-1 w-3 h-3 bg-emerald-300 border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
