BUCKET=honeycomb.assyrian.org.uk
S3CONFIG=-c ~/.gqs3cfg
test: tests.js honeycomb.js
	node tests.js

deploy:
	s3cmd $(S3CONFIG) -P put index.html honeycomb.js s3://$(BUCKET)
	s3cmd $(S3CONFIG) -P put css/bootstrap.min.css \
		s3://$(BUCKET)/css/bootstrap.min.css
	s3cmd $(S3CONFIG) -P put css/footer.css s3://$(BUCKET)/css/footer.css

.PHONY: test deploy
