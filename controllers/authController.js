const { createClient } = require("@supabase/supabase-js");
const { supabaseAdmin } = require("../supabaseClient");
require("dotenv").config();

const supabaseAnonClient= createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

exports.registerUser = async (req, res) => {
    const {title, review, rating} = req.body;

    const {data, error} = await supabaseAdmin.auth.admin.createUser({
       title, review, rating,
    }); 
    if (error) return res.status(400).json({
        error: error.message
    });
    res.json({user: data.user});
    return res;
};

exports.loginUser = async (req, res) => {
    const {title, review, rating} = req.body;

    const {data, error} = await supabaseAnonClient.auth.signInWithPassword({
        title, review, rating
    });

    if (error) return res.status(400).json({
        error: error.message
    });
    res.json({user: data.user, session:data.session});
    return res;
};