# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Survey.destroy_all

Survey.create(q1: '20under', q2: '3under', q3: 'yes');
Survey.create(q1: '21to30', q2: '4to7', q3: 'no');
Survey.create(q1: '31to40', q2: '8above', q3: 'yes');
Survey.create(q1: '41above', q2: '4to7', q3: 'yes');
Survey.create(q1: '20under', q2: '8above', q3: 'yes');
Survey.create();
Survey.create();
Survey.create();
Survey.create();
Survey.create();
Survey.create();
Survey.create();
Survey.create();
Survey.create();
Survey.create();
Survey.create();
Survey.create();
Survey.create();
Survey.create();
