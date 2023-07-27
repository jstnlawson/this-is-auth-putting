
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

-- Testing/ and displaying in the Shelf page
INSERT INTO "item" ("description","image_url", "user_id")
VALUES 
	('Beauty and the Beast', 'beauty-and-the-beast.jpg',1), 
	('Captain Marvel', 'captain-marvel.jpg',1);