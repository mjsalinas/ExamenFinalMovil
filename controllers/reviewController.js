require('dotenv').config();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// GET - obtener todas las reseñas
exports.getAllReviews = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las reseñas", error: error.message });
  }
};

// POST - crear nueva reseña
exports.createReview = async (req, res) => {
  try {
    const { title, review, rating } = req.body;

    // Validación de datos
    if (!title || !rating) {
      return res.status(400).json({ message: "El título y la calificación son obligatorios" });
    }

    const { data, error } = await supabase
      .from('reviews')
      .insert([{ title, review, rating }])
      .select();

    if (error) throw error;

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la reseña", error: error.message });
  }
};

// DELETE - eliminar reseña por id
exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    // Validación de ID
    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', id);

    if (error) throw error;

    res.status(200).json({ message: "Reseña eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la reseña", error: error.message });
  }
};

// PUT - actualizar reseña por id
exports.updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, review, rating } = req.body;

    // Validación de datos
    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }
    if (!title && !review && !rating) {
      return res.status(400).json({ message: "Debe proporcionar al menos un campo para actualizar" });
    }

    const updateData = {};
    if (title) updateData.title = title;
    if (review) updateData.review = review;
    if (rating) updateData.rating = rating;

    const { data, error } = await supabase
      .from('reviews')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la reseña", error: error.message });
  }
};