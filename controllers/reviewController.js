const { createClient } = require("@supabase/supabase-js");

// Crear cliente Supabase usando variables de entorno
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// GET - obtener todas las reseñas
const getAllReviews = async (req, res) => {
  const { data, error } = await supabase.from('reviews').select('*');
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json({ data });
};

// POST - crear nueva reseña
async function createReview(req, res) {
  const { title, review, rating } = req.body;
  const { data, error } = await supabase.from('reviews').insert([{ title, review, rating }]).select();
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json({ data });
}

// PUT - actualizar reseña por id
const updateReview = async (req, res) => {
  const { id } = req.params;
  const { title, review, rating } = req.body;
  const { data, error } = await supabase.from("reviews").update({ title, review, rating }).eq("id", id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }s
  res.status(200).json({ data });
};

// DELETE - eliminar reseña por id
const deleteReview = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('reviews').delete().eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(204).send();
};

module.exports = {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview
};