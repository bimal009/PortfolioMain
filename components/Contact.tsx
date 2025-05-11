"use client";

import { Github } from "lucide-react";
import { Instagram, Twitter, Send } from "lucide-react";
import Link from "next/link";
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

interface FormValues {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            setSubmitStatus('submitting');

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            );

            reset();
            setSubmitStatus('success');
            console.log(data)

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('error');

            // Reset error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        }
    };

    return (
        <div className="text-gray-300 min-h-1/2 py-12 md:py-16 px-4">
            {/* Simple background effect - made smaller for mobile */}
            <div className="fixed top-1/4 -left-20 w-32 md:w-64 h-32 md:h-64 rounded-full blur-[50px] md:blur-[100px] -z-10"></div>

            <div className="max-w-lg mx-auto">
                {/* Header */}
                <div className="mb-6 text-center">
                    <h1 className="text-xl md:text-2xl font-bold mb-2 text-white">Get In Touch</h1>
                    <div className="flex justify-center">
                        <div className="w-12 h-1 bg-purple-500 rounded-full mb-4"></div>
                    </div>
                </div>

                <div className="border border-white/5 shadow-lg rounded-lg overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                    {/* Contact info */}
                    <div className="p-4 md:p-6 border-b border-white/10 flex flex-col items-center justify-between">
                        <div className="grid grid-cols-3 gap-2 md:gap-3 text-sm text-center w-full">
                            <div className="flex items-center justify-center">
                                <Link target="_blank" href="https://instagram.com/bunchoo_graphics11">
                                    <Instagram size={18} className="text-purple-400" />
                                </Link>
                            </div>

                            <div className="flex items-center justify-center">
                                <Link target="_blank" href="https://x.com/CodeWithBun">
                                    <Twitter size={18} className="text-purple-400" />
                                </Link>
                            </div>

                            <div className="flex items-center justify-center">
                                <Link target="_blank" href="https://github.com/bimal009">
                                    <Github size={18} className="text-purple-400" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-4 md:p-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:space-y-4" noValidate>
                            <div>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    placeholder="Name"
                                    className={`w-full px-3 md:px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-600'} 
                                      rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base`}
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
                                    className={`w-full px-3 md:px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-600'} 
                                      rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base`}
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
                                    className={`w-full px-3 md:px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-600'} 
                                      rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm md:text-base`}
                                />
                                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={submitStatus === 'submitting'}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-md flex items-center justify-center gap-2 disabled:opacity-70 text-sm md:text-base"
                            >
                                {submitStatus === 'submitting' ? (
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

                            {submitStatus === 'success' && (
                                <div className="mt-3 p-2 rounded-md text-center flex justify-center items-center text-green-400 text-xs md:text-sm">
                                    Thank you for your message! I&apos;ll get back to you soon.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mt-3 p-2 rounded-md text-center flex justify-center items-center text-red-400 text-xs md:text-sm">
                                    Failed to send message. Please try again later.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;