DROP TABLE IF EXISTS meals;

CREATE TABLE meals (
 meal_id serial ,
 meal_name varchar(40),
 meal_type varchar(40),
 meal_description text
);

INSERT INTO meals (meal_name, meal_type, meal_description) VALUES
('Ribs with corn', 'BBQ', 'Rack of smoked ribs and barbeque sauce. Served with a side of buttered corn on the cobb with seasoning'),
('Brisket with beans', 'BBQ', '1lb of Texas style smoked brisket. Served with a side of bbq bakes beans'),
('Chicken with salad', 'BBQ', 'Smoked chicken thigh seasoned with chipotle peppers. Served with a ceasar salad'),
('Pizza and breadsticks', 'Take-out', 'Pizza with your choice of toppins ordered from the local town pizza spot'),
('Chicken stir-fry and rice', 'Take-out', 'Chicken stir fry combo with white or fried rice and egg roll from the #1 chinese restaurant in town'),
('Tikka masala with Garlic Naan bread', 'Take-out', 'Tikka masala sauce with your choice of meat, rice, and a side of garlic naan bread from the local Indian restaurant');