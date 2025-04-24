
.PHONY: peribolos
# Runs Peribolos
peribolos:
	docker run --rm -t -v $(CURDIR):/this -w /this/tools golang go run peribolosbuilder.go -config=../config 

