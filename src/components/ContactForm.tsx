
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Bericht verzonden",
        description: "We nemen zo snel mogelijk contact met je op.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Naam"
          className="w-full p-3 bg-white rounded-md border border-innovisual-border focus:outline-none focus:ring-2 focus:ring-[#5c899d]"
        />
      </div>
      
      <div className="space-y-2">
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="w-full p-3 bg-white rounded-md border border-innovisual-border focus:outline-none focus:ring-2 focus:ring-[#5c899d]"
        />
      </div>
      
      <div className="space-y-2">
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Bedrijfsnaam"
          className="w-full p-3 bg-white rounded-md border border-innovisual-border focus:outline-none focus:ring-2 focus:ring-[#5c899d]"
        />
      </div>
      
      <div className="space-y-2">
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Let's talk :)"
          rows={5}
          className="w-full p-3 bg-white rounded-md border border-innovisual-border focus:outline-none focus:ring-2 focus:ring-[#5c899d] resize-none"
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#5c899d] text-white py-3 rounded-md font-medium hover:bg-[#4a7081] transition-colors flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Verzenden...
          </>
        ) : (
          "Verstuur"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;