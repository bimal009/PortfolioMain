"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, Github, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

type FormValues = {
    name: string;
    email: string;
    message: string;
};

const Contact: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, // Replace with your EmailJS service ID
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, // Replace with your EmailJS template ID
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            );
            reset();
        } catch (error) {
            console.error('Failed to send email:', error);
        }
    };

    return (
        <div className="text-gray-300 min-h-screen py-16 px-4">
            {/* Simple background effect */}
            <div className="fixed top-1/4 -left-20 w-64 h-64  rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-lg mx-auto">
                {/* Header */}
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold mb-2 text-white">Get In Touch</h1>
                    <div className="flex justify-center">
                        <div className="w-12 h-1 bg-purple-500 rounded-full mb-4"></div>
                    </div>
                </div>

                <div className=" border border-white/5 shadow-lg rounded-lg overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                    {/* Contact info */}
                    <div className="p-6 border-b border-white/10 flex flex-col items-center justify-between">
                        <div className="grid grid-cols-4 gap-3 text-sm text-center">
                            <div className="flex items-center">
                                <Mail size={20} className="mr-2 text-purple-400" />

                            </div>
                            <div className="flex items-center">
                                <Phone size={20} className="mr-2 text-purple-400" />

                            </div>
                            <div className="flex items-center">
                                <Github size={20} className="mr-2 text-purple-400" />

                            </div>
                            <div className="flex items-center">
                                <Github size={20} className="mr-2 text-purple-400" />

                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                            <div>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    placeholder="Name"
                                    className={`w-full px-4 py-2  border ${errors.name ? 'border-red-500' : 'border-gray-600'} 
                  rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                                />
                                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                            </div>

                            <div>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+\.\S+$/,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    type="email"
                                    placeholder="Email"
                                    className={`w-full px-4 py-2  border ${errors.email ? 'border-red-500' : 'border-gray-600'} 
                  rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                                />
                                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                            </div>

                            <div>
                                <textarea
                                    {...register("message", {
                                        required: "Message is required",
                                        minLength: { value: 10, message: "Message is too short" }
                                    })}
                                    placeholder="Your message"
                                    rows={4}
                                    className={`w-full px-4 py-2  border ${errors.message ? 'border-red-500' : 'border-gray-600'} 
                  rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none`}
                                />
                                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-md flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>

                            {isSubmitSuccessful && (
                                <div className="mt-3 p-2 rounded-md text-centre flex justify-center  items-center text-green-400 text-sm">
                                    Thank you for your message! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-3 text-center text-xs text-gray-400 border-t border-white/5">
                        <p>© 2025 Bimal Pandey. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;