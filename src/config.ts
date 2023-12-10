export const examples = {
	"data-types": `
# primitive types, Number, String, Boolean
print(2 * 2)
print("Hello" + " World")

# Dict
print({name: "Q", age: 1})

# Vectors
vec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(head(vec, 5))

# vectorized operations
print(vec * 2)

# boolean indexing
vec2 = random(10, 1, 3)
print(vec2[vec2 > 2.5])
    `,
	expressions: `
# assignment
let x  = 1 # let is optional
y <- 2

# conditionals
if (random()[1] > 0.6) {
    print("greater than 0.6")
} else {
    print("less than 0.6")
}

# for loop
for (i in 1:3) {
    print(i)
}
`,
	functions: `
greet <- fn(name) {
    if (name == "Q") {
        return "I know you!"
    }

    # implicit return
    "Hi " + name
}

print(greet("Q"))


# use the pipe operator
"john" |> greet |> print
    `,
	functional: `
# functions as first class citizens
vec = [1, 2, 3]

make_multiplier <- fn (val) {
  return fn (v) v * val
}

double <- make_multiplier(2)
triple <- make_multiplier(3)

print(double(vec))
print(triple(vec))

`,
};

// # functions as first class citizens
// map = fn(arr, f) {
//     arr_length = len(arr)
//     result = vector(len(arr))
//     for (i in 1:arr_length) {
//         result[i] = f(arr[i])
//     }
//     result
// }

// [1, 2, 3] |> map(fn(x) x * 2)
