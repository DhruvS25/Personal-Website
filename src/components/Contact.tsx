import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type ContactForm = {
    name: string
    email: string
  }

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>()

  function onSubmit(data: ContactForm) {
    // eslint-disable-next-line no-console
    console.log('Form submit', data)
  }
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
                <div className="mx-auto max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="rounded-xl border p-6 shadow-sm dark:border-neutral-800"
                >
                    <h2 className="mb-4 text-3xl font-bold">Contact</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-1">
                        <label htmlFor="name" className="text-sm text-neutral-600 dark:text-neutral-300">Name</label>
                        <input
                        id="name"
                        className="rounded-md border bg-transparent px-3 py-2 outline-none ring-0 transition-colors placeholder:text-neutral-400 focus:border-neutral-400 dark:border-neutral-700 dark:focus:border-neutral-500"
                        placeholder="John Smith"
                        {...register('name', { required: true })}
                        />
                        {errors.name && <span className="text-sm text-red-500">Name is required</span>}
                    </div>
                    <div className="grid gap-1">
                        <label htmlFor="email" className="text-sm text-neutral-600 dark:text-neutral-300">Email</label>
                        <input
                        id="email"
                        type="email"
                        className="rounded-md border bg-transparent px-3 py-2 outline-none ring-0 transition-colors placeholder:text-neutral-400 focus:border-neutral-400 dark:border-neutral-700 dark:focus:border-neutral-500"
                        placeholder="johnsmith@example.com"
                        {...register('email', { required: true })}
                        />
                        {errors.email && <span className="text-sm text-red-500">Email is required</span>}
                    </div>
                    <div className="sm:col-span-2">
                        <button type="submit" className="w-full rounded-md bg-neutral-900 px-4 py-2 text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                        Submit
                        </button>
                    </div>
                    </form>
                </motion.div>
                </div>
            </section>
    )
}