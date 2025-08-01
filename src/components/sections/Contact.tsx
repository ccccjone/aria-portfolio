'use client';

import { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import AnimatedDiv from "../ui/AnimatedDiv";
import Card from "../ui/Card";
import SocialLinksCircle from "../ui/SocialLinksCircle";
import { socialLinks } from "../../data/socialLinks";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [radius, setRadius] = useState(220);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRadius(160); 
      } else if (width < 768) {
        setRadius(220)
      } else if (width < 1120) {
        setRadius(160); 
      } else {
        setRadius(220);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // prevent multiple submissions
    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      setMessage('Please wait a second before submitting again');
      setFormStatus('error');
      return;
    }
    
    setFormStatus('sending');
    setLastSubmitTime(now);
    setMessage('');

    try {
       // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      // validate configuration
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS Configuration Error');
      }
      
      // send email
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current!,
        publicKey
      );
      
      setFormStatus('success');
      setMessage('Thanks for your message! I will reply as soon as possible.');
      
      // reset form
      if (form.current) {
        form.current.reset();
      }
      
    } catch (error) {
      setFormStatus('error');
      
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('Failed to send email. Please try again later or send an email directly to ccjwcui@gmail.com');
      }
    }

    // reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <SectionTitle 
          title="Let's Build Something Great Together" 
          subtitle="I'm currently seeking full-time opportunities as a Software Engineer or Full Stack Developer. Feel free to reach out!"
        />

        <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
          <AnimatedDiv delay={0.2}>
            <div className="flex justify-center relative">
              <Image 
                src="/aria-thinking-image.png" 
                alt="Contact Avatar"
                width={400}
                height={400}
                className="rounded-xl max-w-full h-auto"
                priority
              />
              
              <SocialLinksCircle 
                links={socialLinks} 
                radius={radius}
                className="pointer-events-auto"
              />
            </div>
            
          </AnimatedDiv>

          <AnimatedDiv delay={0.4}>
            <Card className="p-8">
              
              {message && (
                <div className={`mb-4 p-3 rounded-lg text-center transition-all duration-300 ${
                  formStatus === 'success' 
                    ? 'bg-green-100 text-green-700 border border-green-300' 
                    : 'bg-red-100 text-red-700 border border-red-300'
                }`}>
                  {message}
                </div>
              )}
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                    Name *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    required
                    disabled={formStatus === 'sending'}
                    maxLength={50}
                    className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                    disabled={formStatus === 'sending'}
                    maxLength={100}
                    className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                    Message *
                  </label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows={5}
                    placeholder="Curious about working together? I'd love to hear from you ✨"
                    required
                    disabled={formStatus === 'sending'}
                    maxLength={1000}
                    className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  variant="primary" 
                  size="lg"
                  className="w-full"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' : 
                   formStatus === 'success' ? 'Sent! ✓' : 'Send Message ✉️'}
                </Button>
              </form>
              
            </Card>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};

export default Contact;