import { useState } from "react"

function HogForm({ onAddHog }) {
  const [form, setForm] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    medal: "",
    image: "",
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
  e.preventDefault()

  onAddHog({
    name: form.name,
    specialty: form.specialty,
    weight: Number(form.weight),
    greased: form.greased,
    "highest medal achieved": form.medal || "bronze",
    image: form.image || "https://via.placeholder.com/150",
  })
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" value={form.name} onChange={handleChange} />

      <label htmlFor="specialty">Specialty:</label>
      <input id="specialty" name="specialty" value={form.specialty} onChange={handleChange} />

      <label htmlFor="weight">Weight:</label>
      <input id="weight" name="weight" type="number" value={form.weight} onChange={handleChange} />

     <label htmlFor="form-greased">Greased?</label>
<input
  id="form-greased"
  name="greased"
  type="checkbox"
  checked={form.greased}
  onChange={handleChange}
/>

      <label htmlFor="medal">Highest Medal:</label>
      <input id="medal" name="medal" value={form.medal} onChange={handleChange} />

      <label htmlFor="image">Image:</label>
      <input id="image" name="image" value={form.image} onChange={handleChange} />

      <button type="submit">Add Hog</button>
    </form>
  )
}

export default HogForm