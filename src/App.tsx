import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { ThemeToggle } from './components/ThemeToggle'

type ContactForm = {
  name: string
  email: string
}

function App() {
  const [count, setCount] = useState(0)
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>()

  function onSubmit(data: ContactForm) {
    // eslint-disable-next-line no-console
    console.log('Form submit', data)
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <header className="mx-auto flex max-w-4xl items-center justify-between px-4 py-6">
        <h1 className="text-lg font-semibold">Personal Website</h1>
        <ThemeToggle />
      </header>

      <main className="mx-auto max-w-4xl space-y-12 px-4 pb-20">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-xl border p-6 shadow-sm dark:border-neutral-800"
        >
          <h2 className="mb-2 text-2xl font-bold">Hello, world</h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            React 18 + TypeScript + Vite + Tailwind + Framer Motion + lucide-react + react-hook-form
          </p>
          <div className="mt-4 inline-flex items-center gap-3">
            <button
              className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
              onClick={() => setCount(c => c + 1)}
            >
              Count: {count}
            </button>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-xl border p-6 shadow-sm dark:border-neutral-800"
        >
          <h2 className="mb-4 text-xl font-semibold">Quick form</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1">
              <label htmlFor="name" className="text-sm text-neutral-600 dark:text-neutral-300">Name</label>
              <input
                id="name"
                className="rounded-md border bg-transparent px-3 py-2 outline-none ring-0 transition-colors placeholder:text-neutral-400 focus:border-neutral-400 dark:border-neutral-700 dark:focus:border-neutral-500"
                placeholder="Ada Lovelace"
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
                placeholder="ada@math.org"
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
        </motion.section>
      </main>
    </div>
  )
}

export default App
