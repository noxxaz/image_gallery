/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('images').del()
  await knex('images').insert([
    {filename: "DALL·E 2022-08-22 16.17.35 - a shiny metallic robot cuddles a newborn human baby in its arms.png", thumbnail_filename: '', description: 'a shiny metallic robot cuddles a newborn human baby in its arms', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.18.27 - godzilla sniffs a flower in the style of claude monet.png", thumbnail_filename: '', description: 'godzilla sniffs a flower in the style of claude monet', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.18.47 - ink drawing of tokyo with alien spacecraft overhead.png", thumbnail_filename: '', description: 'ink drawing of tokyo with alien spacecraft overhead', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.18.38 - ink drawing of a cityscape with alien spacecraft overhead.png", thumbnail_filename: '', description: 'ink drawing of a cityscape with alien spacecraft overhead', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.18.57 - painting of alien spacecraft above teotihuacan.png", thumbnail_filename: '', description: 'painting of alien spacecraft above teotihuacan', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.19.09 - photo of a black scottish terrier walking beside an astronaut on the moon.png", thumbnail_filename: '', description: 'photo of a black scottish terrier walking beside an astronaut on the moon', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.19.13 - photo of a black scottish terrier walking beside an astronaut on the moon.png", thumbnail_filename: '', description: 'photo of a black scottish terrier walking beside an astronaut on the moon', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.19.27 - synthwave stratocaster flying through outer space with planets visible in the background.png", thumbnail_filename: '', description: 'DALL·E 2022-08-22 16.19.27 - synthwave stratocaster flying through outer space with planets visible in the background', date_created: '2022-08-01'},
    {filename: "DALL·E 2022-08-22 16.20.42 - cyberpunk kitten in a leather jacket riding a motorcycle.png", thumbnail_filename: '', description: 'DALL·E 2022-08-22 16.20.42 - cyberpunk kitten in a leather jacket riding a motorcycle', date_created: '2022-08-01'},
  ]);
};
