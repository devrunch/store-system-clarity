const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-neutral-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-[10%] w-3 h-3 bg-neutral-black rounded-full"></div>
        <div className="absolute top-40 right-[15%] w-2 h-2 bg-neutral-black rounded-full"></div>
        <div className="absolute top-1/2 right-[8%] w-2 h-2 bg-accent-coral rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-neutral-light rounded-full border border-neutral-gray/20 text-sm text-neutral-black mb-8 font-medium">
            POWERFUL FEATURES
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-black mb-8 tracking-tight leading-tight max-w-5xl mx-auto">
            Full Control of Your{" "}
            <span className="relative inline-block">
              E-Commerce
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-accent-lime rounded-full opacity-60"></div>
            </span>
            {" "}System
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto font-light leading-relaxed">
            Outlfy E-Commerce OS combines everything you need to build, run, and scale your online business — 
            across website, app, and admin dashboard — all in one place.
          </p>
        </div>

        {/* Feature Block 1 - Store Management with Laptop Image */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-neutral-black/5 rounded-full blur-2xl"></div>
                <img 
                  src="/8.png" 
                  alt="Outlfy Store Frontend"
                  className="w-full rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] relative z-10"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop';
                  }}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-1 bg-accent-lime rounded-full mb-6"></div>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-black mb-6 tracking-tight">
                Store & Product Management
              </h3>
              <p className="text-lg text-neutral-gray mb-8 font-light leading-relaxed">
                Manage your entire product catalog and store operations effortlessly — no developer required.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Product customization",
                  "Variants & categories",
                  "Bulk import",
                  "Mega menus",
                  "Refunds & orders",
                  "Multi-store support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-2">
                    <div className="w-2 h-2 bg-accent-lime rounded-full flex-shrink-0"></div>
                    <span className="text-neutral-black font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Block 2 - Dashboard with Admin Image */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-1 bg-accent-coral rounded-full mb-6"></div>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-black mb-6 tracking-tight">
                Dashboard & Instant Updates
              </h3>
              <p className="text-lg text-neutral-gray mb-8 font-light leading-relaxed">
                Update products, promotions, and prices instantly. Get a complete bird's-eye view of your business.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time summary and advanced reports",
                  "Role-based staff management",
                  "Light & Dark mode dashboard",
                  "Custom analytics and insights"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-neutral-light rounded-2xl">
                    <div className="w-3 h-3 bg-accent-coral rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-neutral-black font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neutral-black/5 rounded-full blur-2xl"></div>
              <img 
                src="/6.png" 
                alt="Outlfy Admin Dashboard"
                className="w-full rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] relative z-10"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop';
                }}
              />
            </div>
          </div>
        </div>

        {/* Feature Block 3 - Mobile App */}
        <div className="mb-16">
          <div className="bg-neutral-black rounded-[3rem] p-12 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-neutral-white/5 rounded-full blur-3xl"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="w-12 h-1 bg-accent-lime rounded-full mb-6"></div>
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-white mb-6 tracking-tight">
                  Mobile App Experience
                </h3>
                <p className="text-lg text-neutral-white/70 mb-8 font-light leading-relaxed">
                  Deliver a smooth, personalized experience for every shopper — across web and app.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Customer portal with order tracking",
                    "OTP verification for secure access",
                    "Wishlist & advanced search",
                    "Multi-language & currency",
                    "PWA for mobile-like speed"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 py-3 border-b border-neutral-white/10">
                      <div className="w-2 h-2 bg-accent-lime rounded-full flex-shrink-0"></div>
                      <span className="text-neutral-white/90 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-neutral-white/10 to-transparent rounded-[2rem] blur-2xl scale-110"></div>
                  <img 
                    src="/9.png" 
                    alt="Outlfy Mobile App"
                    className="w-64 md:w-80 relative z-10 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=700&fit=crop';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Feature Cards - 4 columns */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Marketing & Growth",
                desc: "Campaigns, coupons, banners, and loyalty rewards",
                color: "bg-accent-lime"
              },
              {
                title: "Shipping & Logistics",
                desc: "Zone-based shipping, partner integrations",
                color: "bg-accent-coral"
              },
              {
                title: "Integrations",
                desc: "ERP, CRM, tax, payment, inventory systems",
                color: "bg-accent-purple"
              },
              {
                title: "Media Control",
                desc: "Centralized assets, themes, layouts",
                color: "bg-neutral-black"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-neutral-light rounded-2xl p-8 hover:bg-neutral-black transition-all duration-500 cursor-pointer overflow-hidden border border-neutral-gray/10 shadow-minimal"
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${item.color}`}></div>
                <h4 className="text-2xl font-bold text-neutral-black group-hover:text-neutral-white mb-2 transition-colors">
                  {item.title}
                </h4>
                <p className="text-md text-neutral-gray group-hover:text-neutral-white/70 font-light transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="text-center py-16 border-t border-neutral-gray/10">
          <p className="text-2xl md:text-3xl font-light text-neutral-black leading-relaxed max-w-4xl mx-auto">
            A single system that powers your{" "}
            <span className="font-bold">website</span>,{" "}
            <span className="font-bold">mobile app</span>,{" "}
            <span className="font-bold">dashboard</span>, and{" "}
            <span className="font-bold">marketing</span> —
            <br />
            <span className="font-bold">**Custom-Built, Fully Coded, & 100% Under your Control.**</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
