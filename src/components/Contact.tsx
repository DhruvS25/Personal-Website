import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

type ContactForm = {
    name: string
    email: string
    message: string
  }

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>()
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  async function onSubmit(data: ContactForm) {
    setLoading(true)
    setStatusMessage(null)
    
    try {
      // Initialize EmailJS (replace with your public key)
      emailjs.init('H9JvCPJ1E7Ppfuukn')
      
      // Send email (replace with your service ID and template ID)
      await emailjs.send('service_z30l0t8', 'template_a0i7v9p', {
        to_email: 'dhruvsagre252@gmail.com',
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      })
      
      setStatusMessage({ type: 'success', text: 'Message sent successfully!' })
      reset()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to send email:', error)
      setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again.' })
    } finally {
      setLoading(false)
    }
  }
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-20">
                <div className="mx-auto max-w-7xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="rounded-xl border border-lightprimary/30 dark:border-darkprimary/30 p-4 sm:p-6 shadow-sm bg-lightbg dark:bg-darkbg"
                >
                    <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-lighttext dark:text-darktext">Contact</h2>
                    {statusMessage && (
                      <div className={`p-3 rounded-md text-sm ${statusMessage.type === 'success' ? 'bg-green-500/20 text-green-700 dark:text-green-400' : 'bg-red-500/20 text-red-700 dark:text-red-400'}`}>
                        {statusMessage.text}
                      </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-1">
                        <label htmlFor="name" className="text-sm text-lighttext dark:text-darktext">Name</label>
                        <input
                        id="name"
                        className="rounded-md border border-lightprimary/30 dark:border-darkprimary/30 bg-lightbg dark:bg-darkbg px-3 py-2 outline-none ring-0 transition-colors placeholder:text-lighttext/40 dark:placeholder:text-darktext/40 text-lighttext dark:text-darktext focus:border-lightprimary/60 dark:focus:border-darkprimary/60"
                        placeholder="John Smith"
                        {...register('name', { required: true })}
                        />
                        {errors.name && <span className="text-sm text-lightaccent dark:text-darkaccent">Name is required</span>}
                    </div>
                    <div className="grid gap-1">
                        <label htmlFor="email" className="text-sm text-lighttext dark:text-darktext">Email</label>
                        <input
                        id="email"
                        type="email"
                        className="rounded-md border border-lightprimary/30 dark:border-darkprimary/30 bg-lightbg dark:bg-darkbg px-3 py-2 outline-none ring-0 transition-colors placeholder:text-lighttext/40 dark:placeholder:text-darktext/40 text-lighttext dark:text-darktext focus:border-lightprimary/60 dark:focus:border-darkprimary/60"
                        placeholder="johnsmith@example.com"
                        {...register('email', { required: true })}
                        />
                        {errors.email && <span className="text-sm text-lightaccent dark:text-darkaccent">Email is required</span>}
                    </div>
                    <div className="sm:col-span-2 w-full">
                        <label htmlFor="message" className="text-sm text-lighttext dark:text-darktext">Message</label>
                        <textarea
                        id="message"
                        className="w-full rounded-md border border-lightprimary/30 dark:border-darkprimary/30 bg-lightbg dark:bg-darkbg px-3 py-2 outline-none ring-0 transition-colors placeholder:text-lighttext/40 dark:placeholder:text-darktext/40 text-lighttext dark:text-darktext focus:border-lightprimary/60 dark:focus:border-darkprimary/60 resize-none"
                        placeholder="Hey let's connect! I want to discuss a potential project or collaboration."
                        rows={4}
                        {...register('message', { required: true })}
                        />
                        {errors.message && <span className="text-sm text-lightaccent dark:text-darkaccent">Message is required</span>}
                    </div>
                    <div className="sm:col-span-2">
                        <button type="submit" disabled={loading} className="w-full rounded-md bg-lightaccent dark:bg-darkaccent px-4 py-2 text-lightbg dark:text-darkbg transition-colors hover:bg-lightaccent/90 dark:hover:bg-darkaccent/90 disabled:opacity-50 disabled:cursor-not-allowed">
                        {loading ? 'Sending...' : 'Submit'}
                        </button>
                    </div>
                    </form>
                </motion.div>
                </div>
            </section>
    )
}