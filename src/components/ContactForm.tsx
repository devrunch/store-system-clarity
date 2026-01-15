import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    currentSystems: "",
    painPoints: "",
    revenue: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Format all form fields into the message
      const formattedMessage = `
Company: ${formData.company}
Current Systems: ${formData.currentSystems || 'Not specified'}
Biggest Challenges: ${formData.painPoints}
Annual Revenue: ${formData.revenue || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}
      `.trim();

      const response = await fetch("https://www.outlfy.com/api/contact", {
        method: "POST",
        headers: {
          "accept": "*/*",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Audit Request from ${formData.company}`,
          message: formattedMessage,
          formType: "contact",
          source: "/commerce"
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "Audit Request Submitted!",
        description: "We'll contact you within 24 hours to schedule your free retail audit.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        currentSystems: "",
        painPoints: "",
        revenue: "",
        timeline: ""
      });
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-black mb-6 tracking-tight">
            Strategic Alliance
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto font-light">
            We become your strategic tech ally—auditing, building, and scaling your digital 
            ecosystem so you save costs, make data-driven decisions, and focus entirely on growth.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-black mb-6 tracking-tight">
                Your Long-Term Tech Partner
              </h3>
              <p className="text-neutral-gray text-lg leading-relaxed mb-8 font-light">
                We partner with businesses where tech becomes the growth engine. 
                We stay with you till the systems work seamlessly—and beyond.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-lime/10 rounded-[30%] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-neutral-black" />
                </div>
                <div>
                  <p className="text-neutral-black font-medium">Call Us</p>
                  <p className="text-neutral-gray">+91 6387 817 791</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-coral/10 rounded-[30%] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-neutral-black" />
                </div>
                <div>
                  <p className="text-neutral-black font-medium">Email Us</p>
                  <p className="text-neutral-gray">info@outlfy.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-[30%] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-neutral-black" />
                </div>
                <div>
                  <p className="text-neutral-black font-medium">Visit Us</p>
                  <p className="text-neutral-gray">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-white rounded-2xl p-6 border border-neutral-gray/10 shadow-minimal">
              <h4 className="text-neutral-black font-medium mb-2">What to Expect:</h4>
              <ul className="space-y-2 text-neutral-gray font-light">
                <li>Deep dive into your current operations</li>
                <li>Identification of cost-saving opportunities</li>
                <li>Custom roadmap for your growth goals</li>
                <li>No-pressure consultation</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-neutral-white border border-neutral-gray/10 shadow-minimal">
            <CardHeader>
              <CardTitle className="text-neutral-black text-2xl font-semibold">Claim Your Free Audit</CardTitle>
              <CardDescription className="text-neutral-gray font-light">
                Tell us about your retail business and current challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-neutral-black font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-neutral-light border-neutral-gray/20 text-neutral-black placeholder:text-neutral-gray/50"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-neutral-black font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-neutral-light border-neutral-gray/20 text-neutral-black placeholder:text-neutral-gray/50"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-neutral-black font-medium">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="bg-neutral-light border-neutral-gray/20 text-neutral-black placeholder:text-neutral-gray/50"
                      placeholder="Your Retail Store"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-neutral-black font-medium">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-neutral-light border-neutral-gray/20 text-neutral-black placeholder:text-neutral-gray/50"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="currentSystems" className="text-neutral-black font-medium">Current Systems</Label>
                  <Textarea
                    id="currentSystems"
                    name="currentSystems"
                    value={formData.currentSystems}
                    onChange={handleChange}
                    className="bg-neutral-light border-neutral-gray/20 text-neutral-black placeholder:text-neutral-gray/50"
                    placeholder="What POS, CRM, inventory systems are you currently using?"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="painPoints" className="text-neutral-black font-medium">Biggest Challenges *</Label>
                  <Textarea
                    id="painPoints"
                    name="painPoints"
                    value={formData.painPoints}
                    onChange={handleChange}
                    required
                    className="bg-neutral-light border-neutral-gray/20 text-neutral-black placeholder:text-neutral-gray/50"
                    placeholder="What operational challenges are costing you time and money?"
                    rows={3}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="revenue" className="text-neutral-black font-medium">Annual Revenue Range</Label>
                    <select
                      id="revenue"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md bg-neutral-light border border-neutral-gray/20 text-neutral-black"
                    >
                      <option value="">Select range</option>
                      <option value="under-500k">Under $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-plus">$5M+</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="timeline" className="text-neutral-black font-medium">Implementation Timeline</Label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md bg-neutral-light border border-neutral-gray/20 text-neutral-black"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-2 weeks)</option>
                      <option value="month">Within a month</option>
                      <option value="quarter">Within 3 months</option>
                      <option value="planning">Just planning ahead</option>
                    </select>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  variant="minimal" 
                  size="xl" 
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book My Free Audit"}
                  {!isSubmitting && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />}
                </Button>
                
                <p className="text-sm text-neutral-gray text-center font-light">
                  No spam, no sales pressure. Just actionable insights for your business.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;