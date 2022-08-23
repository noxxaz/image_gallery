/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('images').del()
  // Always start image_id counter at 1
  await knex.raw("ALTER SEQUENCE images_image_id_seq RESTART WITH 1");

  await knex('images').insert([
    {filename: "DALL·E 2022-08-22 16.22.45 - 3d render shiny chrome female robot shiny in a purple room.png", thumbnail_filename: '', description: '3d render shiny chrome female robot shiny in a purple room', date_created: '2022-08-20'},
    {filename: "DALL·E 2022-08-22 16.18.02 - godzilla walks through a cubist, expressionist style metropolis.png", thumbnail_filename: '', description: 'godzilla walks through a cubist, expressionist style metropolis', date_created: '2022-08-02'},
    {filename: "DALL·E 2022-08-22 16.17.35 - a shiny metallic robot cuddles a newborn human baby in its arms.png", thumbnail_filename: '', description: 'a shiny metallic robot cuddles a newborn human baby in its arms', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.21.06 - cobb salad in the shape of rick sanchez's face professional food photography.png", thumbnail_filename: '', description: "cobb salad in the shape of rick sanchez's face professional food photography", date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.18.47 - ink drawing of tokyo with alien spacecraft overhead.png", thumbnail_filename: '', description: 'ink drawing of tokyo with alien spacecraft overhead', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.19.27 - synthwave stratocaster flying through outer space with planets visible in the background.png", thumbnail_filename: '', description: 'DALL·E 2022-08-22 16.19.27 - synthwave stratocaster flying through outer space with planets visible in the background', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.18.27 - godzilla sniffs a flower in the style of claude monet.png", thumbnail_filename: '', description: 'godzilla sniffs a flower in the style of claude monet', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.18.57 - painting of alien spacecraft above teotihuacan.png", thumbnail_filename: '', description: 'painting of alien spacecraft above teotihuacan', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.20.42 - cyberpunk kitten in a leather jacket riding a motorcycle.png", thumbnail_filename: '', description: 'cyberpunk kitten in a leather jacket riding a motorcycle', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.22.01 - tyrannosaurus rex walks on mars.png", thumbnail_filename: '', description: 'tyrannosaurus rex walks on mars', date_created: '2022-08-20'},
    {filename: "DALL·E 2022-08-22 16.22.24 - flying saucers hover above mt. fuji grainy 35mm film photograph.png", thumbnail_filename: '', description: 'flying saucers hover above mt. fuji grainy 35mm film photograph', date_created: '2022-08-20'},
    {filename: "DALL·E 2022-08-22 16.19.09 - photo of a black scottish terrier walking beside an astronaut on the moon.png", thumbnail_filename: '', description: 'photo of a black scottish terrier walking beside an astronaut on the moon', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.20.10 - synthwave astronaut playing electric guitar in outer space with planets visible in background.png", thumbnail_filename: '', description: 'synthwave astronaut playing electric guitar in outer space with planets visible in background', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.22.10 - godzilla wearing a pink bathing suit at the beach.png", thumbnail_filename: '', description: 'godzilla wearing a pink bathing suit at the beach', date_created: '2022-08-20'},
    {filename: "DALL·E 2022-08-22 16.20.07 - synthwave astronaut playing electric guitar in outer space with planets visible in background.png", thumbnail_filename: '', description: 'synthwave astronaut playing electric guitar in outer space with planets visible in background', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.21.34 - salad in the shape of thinking emoji professional food photography.png", thumbnail_filename: '', description: 'salad in the shape of thinking emoji professional food photography', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.21.48 - synthwave delorean driving into a sunset.png", thumbnail_filename: '', description: 'synthwave delorean driving into a sunset', date_created: '2022-08-20'},
    {filename: "DALL·E 2022-08-22 16.22.33 - kitten riding a motorcycle on the surface of the moon synthwave.png", thumbnail_filename: '', description: 'kitten riding a motorcycle on the surface of the moon synthwave', date_created: '2022-08-20'},
    {filename: "DALL·E 2022-08-22 16.18.22 - godzilla sniffs a flower in the style of claude monet.png", thumbnail_filename: '', description: 'godzilla sniffs a flower in the style of claude monet', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.18.38 - ink drawing of a cityscape with alien spacecraft overhead.png", thumbnail_filename: '', description: 'ink drawing of a cityscape with alien spacecraft overhead', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.21.50 - synthwave delorean driving into a sunset.png", thumbnail_filename: '', description: 'synthwave delorean driving into a sunset', date_created: '2022-08-20'},
    {filename: "DALL·E 2022-08-22 16.21.39 - salad in the shape of thinking emoji professional food photography.png", thumbnail_filename: '', description: 'salad in the shape of thinking emoji professional food photography', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.20.12 - synthwave astronaut playing electric guitar in outer space with planets visible in background.png", thumbnail_filename: '', description: 'synthwave astronaut playing electric guitar in outer space with planets visible in background', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.19.47 - synthwave stratocaster flying through outer space with planets visible in the background.png", thumbnail_filename: '', description: 'synthwave stratocaster flying through outer space with planets visible in the background', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.19.13 - photo of a black scottish terrier walking beside an astronaut on the moon.png", thumbnail_filename: '', description: 'photo of a black scottish terrier walking beside an astronaut on the moon', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.17.51 - german expressionist painting of godzilla.png", thumbnail_filename: '', description: 'german expressionist painting of godzilla', date_created: '2022-08-02'},
    {filename: "DALL·E 2022-08-22 16.21.26 - salad in the shape of thinking emoji professional food photography.png", thumbnail_filename: '', description: 'salad in the shape of thinking emoji professional food photography', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.19.43 - synthwave stratocaster flying through outer space with planets visible in the background.png", thumbnail_filename: '', description: 'synthwave stratocaster flying through outer space with planets visible in the background', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.20.16 - synthwave astronaut playing electric guitar in outer space with planets visible in background.png", thumbnail_filename: '', description: 'synthwave astronaut playing electric guitar in outer space with planets visible in background', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.21.20 - salad in the shape of thinking emoji professional food photography.png", thumbnail_filename: '', description: 'salad in the shape of thinking emoji professional food photography', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.21.46 - synthwave delorean driving into a sunset.png", thumbnail_filename: '', description: 'synthwave delorean driving into a sunset', date_created: '2022-08-20'},
    {filename: "DALL·E 2022-08-22 16.19.52 - synthwave stratocaster flying through outer space with planets visible in the background.png", thumbnail_filename: '', description: 'synthwave stratocaster flying through outer space with planets visible in the background', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.22.02 - tyrannosaurus rex walks on mars.png", thumbnail_filename: '', description: 'tyrannosaurus rex walks on mars', date_created: '2022-08-20'},
    {filename: "DALL·E 2022-08-22 16.22.14 - godzilla wearing a pink bathing suit at the beach.png", thumbnail_filename: '', description: 'godzilla wearing a pink bathing suit at the beach', date_created: '2022-08-20'},
    {filename: "DALL·E 2022-08-22 16.22.41 - 3d render shiny chrome female robot shiny in a purple room.png", thumbnail_filename: '', description: '3d render shiny chrome female robot shiny in a purple room', date_created: '2022-08-20'},
  ]);
};
