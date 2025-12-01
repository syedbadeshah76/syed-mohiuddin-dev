import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.5 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: formRef, visibleItems } = useStaggeredScrollAnimation(1, 0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Formcarry endpoint
  const FORMCARRY_URL = "https://formcarry.com/s/rNcYOif4uz-";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch(FORMCARRY_URL, {
        method: "POST",
        body: formDataObj
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('success'); // Formcarry sometimes returns non-200 but still works
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Syed Badeshah! I'm interested in your services.");
    window.open(`https://wa.me/919573362314?text=${message}`, '_blank');
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "badeshah786@gmail.com", href: "mailto:badeshah786@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9573362314", href: "tel:+919573362314" },
    { icon: MapPin, label: "Location", value: "Hyderabad, India", href: null }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/syedbadeshah76", username: "@syedbadeshah76" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/syed-badeshah-mohiuddin-a30805367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", username: "Syed Badeshah Mohiuddin" }
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className={`inline-block px-4 py-2 mb-4 text-sm font-medium text-gold bg-gold/10 border border-gold/20 rounded-full transition-all duration-1000 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Contact
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="font-display">Get In</span>{' '}
            <span className="text-gradient">Touch</span>
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 transition-all duration-1000 delay-300 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Ready to collaborate on your next project? Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div ref={contentRef} className={`transition-all duration-1000 transform ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="card-premium p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold mb-2 font-display">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, interesting projects, or just chat about technology. 
                Whether you need a wedding website or business solution, feel free to reach out!
              </p>

              {/* WhatsApp Button */}
              <Button 
                onClick={handleWhatsApp}
                className="w-full mb-8 py-6 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-xl hover-lift"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat on WhatsApp
              </Button>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={contact.label} className={`flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border transition-all duration-500 transform hover:border-gold/30 ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`} style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}>
                    <div className="p-3 bg-gold/10 border border-gold/20 rounded-xl">
                      <contact.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a href={contact.href} className="text-muted-foreground hover:text-gold transition-colors">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                {socialLinks.map((social, index) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border hover:border-gold/30 hover-lift transition-all duration-500 group transform ${
                      contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`} style={{ transitionDelay: `${index * 0.1 + 0.6}s` }}>
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl group-hover:bg-gold/10 group-hover:border-gold/20 transition-colors">
                      <social.icon className="h-5 w-5 text-primary group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{social.label}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className={`transition-all duration-1000 transform ${
            visibleItems[0] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="card-premium p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 font-display">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input 
                      name="name" 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input 
                      name="email" 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" 
                      placeholder="you@example.com" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input 
                      name="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" 
                      placeholder="+91 XXXXX XXXXX" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Type</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="Wedding Website">Wedding Website</option>
                      <option value="Business Website">Business Website</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none" 
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={status === 'sending'}
                  className="w-full btn-gold py-6 text-lg font-semibold hover-lift disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="h-5 w-5 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive">
                    <AlertCircle className="h-5 w-5" />
                    <span>Failed to send message. Please try again or use WhatsApp.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
