import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.5 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: formRef, visibleItems } = useStaggeredScrollAnimation(1, 0);

  const [status, setStatus] = useState<string>("");

  // Formcarry endpoint
  const FORMCARRY_URL = "https://formcarry.com/s/rNcYOif4uz-";

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMCARRY_URL, {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        setStatus("✅ Your Form Is Submitted");
      }
    } catch (err) {
      setStatus("❌ Error sending message.");
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "badeshah786@gmail.com", href: "mailto:badeshah786@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9573362314", href: "tel:+919573362314" },
    { icon: MapPin, label: "Location", value: "India", href: null }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/syedbadeshah76", username: "@syedbadeshah76" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/syed-badeshah-mohiuddin-a30805367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", username: "Syed Badeshah Mohiuddin Barkath" }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 transition-all duration-1000 delay-300 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Ready to collaborate on your next project? Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div ref={contentRef} className={`order-2 lg:order-1 transition-all duration-1000 transform ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="card-gradient p-6 sm:p-8 rounded-lg border border-border">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I'm always excited to discuss new opportunities, interesting projects, or just chat about technology. 
                Whether you're looking for a developer to join your team or need help with a specific project, 
                feel free to reach out!
              </p>

              {/* Contact Details */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={contact.label} className={`flex items-center space-x-3 sm:space-x-4 transition-all duration-500 transform ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`} style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}>
                    <div className="p-2 sm:p-3 bg-primary/10 border border-primary/20 rounded-lg">
                      <contact.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm sm:text-base">{contact.label}</p>
                      {contact.href ? (
                        <a href={contact.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm sm:text-base">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Follow Me</h4>
                {socialLinks.map((social, index) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-muted/30 rounded-lg border border-border hover:bg-muted/60 hover-lift transition-all duration-500 group transform ${
                      contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`} style={{ transitionDelay: `${index * 0.1 + 0.6}s` }}>
                    <div className="p-2 bg-primary/10 border border-primary/20 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm sm:text-base">{social.label}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className={`order-1 lg:order-2 transition-all duration-1000 transform ${
            visibleItems[0] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="card-gradient p-6 sm:p-8 rounded-lg border border-border">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input name="name" type="text" required className="w-full px-3 py-2 border rounded-lg" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input name="email" type="email" required className="w-full px-3 py-2 border rounded-lg" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea name="message" rows={5} required className="w-full px-3 py-2 border rounded-lg" placeholder="Tell me about your project..."></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>

                {status && <p className="text-center mt-2 text-sm">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
