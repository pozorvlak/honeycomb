test: tests.js honeycomb.js
	node tests.js

deploy:
	s3cmd -c ~/.gqs3cfg put index.html honeycomb.js  \
		s3://honeycomb.assyrian.org.uk
	s3cmd -c ~/.gqs3cfg put css/bootstrap.min.css \
		s3://honeycomb.assyrian.org.uk/css/bootstrap.min.css
	s3cmd -c ~/.gqs3cfg put css/footer.css \
		s3://honeycomb.assyrian.org.uk/css/footer.css

.PHONY: test deploy
