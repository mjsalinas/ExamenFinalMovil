const { createClient } = require('@supabase/supabase-js');
const supabase = require('../supabaseClient');

const supabaseAnonClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY// esta variable SUPABASE_SERVICE_ROLE_KEY sirve para autenticar al usuario anonimo
);

// GET - obtener todas las reseñas
exports.getAllReviews = async (req, res) => {
  const { data, error } = await supabaseAnonClient.from('reviews').select('*').order('created_at', { ascending: false });
  //.from('reviews').select('*').order('created_at', { ascending: false });
  if (error) return res.status(500).json({
    error: error.message
  });
  res.json({ data });
  return res;
};

// POST - crear nueva reseña
exports.createReview = async (req, res) => {
  const { title, review, rating } = req.body;

  const { data, error } = await supabaseAnonClient.from('reviews').insert([{ title, review, rating }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ message: 'Se guardaron los datos!!', data });
};

// DELETE - eliminar reseña por id
exports.deleteReview = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('reviews')
    .delete()
    .eq('id', id);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: 'Se elimino!!!' });
};

exports.updateReview = async (req, res) => {
  const { id } = req.params;
  const { title, review, rating } = req.body;

  const { data, error } = await supabase
    .from("reviews").update({ title, review, rating }).eq("id", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};