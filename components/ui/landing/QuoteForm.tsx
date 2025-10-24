"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    projectType: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/quote-bg.png')",
      }}
    >
      <div className="w-full max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-12">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90"></div>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 flex-shrink-0"></div>
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 flex-shrink-0"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 flex-shrink-0"></div>
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 flex-shrink-0"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 flex-shrink-0"></div>
          <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 flex-shrink-0"></div>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Write Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Write Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Row 2: Phone and Country */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Write Your Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country<span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Write Your Country</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
              </select>
            </div>
          </div>

          {/* Row 3: Project Type and Company Name */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Type<span className="text-red-500">*</span>
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Write Your Project Type</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App</option>
                <option value="design">Design</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Write Your Company Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Row 4: Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write Your Note"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 hover:bg-blue-700 text-white px-12 py-2 rounded hover:cursor-pointer "
            >
              Request a Quote
            </Button>
          </div>
        </form>

        <div className="flex items-center gap-2 justify-end mt-12">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90"></div>
          <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 flex-shrink-0"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 flex-shrink-0"></div>
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 flex-shrink-0"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 flex-shrink-0"></div>
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 flex-shrink-0"></div>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}
