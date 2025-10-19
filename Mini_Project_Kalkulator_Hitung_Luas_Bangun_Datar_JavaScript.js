// luas dan keliling persegi

let a = parseInt (prompt ("Masukkan sisi persegi a :"))
let j = parseInt (prompt ("Masukkan sisi persegi b :"))

let luas = a * b
console.log ("Luas persegi adalah", luas)

let keliling = 2 * (a + b)
console.log ("Keliling persegi adalah", keliling)

// luas dan keliling segitiga

let b = parseInt (prompt ("Masukkan alas segitiga b :"))
let t = parseInt (prompt ("Masukkan tinggi segitiga t :"))
let s = parseInt (prompt ("Masukkan sisi miring segitiga s :"))

let lua =  a * t / 2
console.log ("Luas segitiga adalah", lua)
let keli = a + t + s
console.log ("Keliling segitiga adalah", keli)

// luas dan keliling lingkaran

let r = parseInt (prompt ("Masukkan jari-jari lingkaran r :"))
let phi = 3.14

let lu = phi * r * r
console.log ("Luas lingkaran adalah", lu)

let kel = 2 * phi * r
console.log ("Keliling lingkaran adalah", kel)

// luas dan keliling jajargenjang

let p = parseInt (prompt ("Masukkan panjang jajargenjang p :"))
let l = parseInt (prompt ("Masukkan lebar jajargenjang l :"))
let s1 = parseInt (prompt ("Masukkan sisi miring jajargenjang s1 :"))
let s2 = parseInt (prompt ("Masukkan sisi miring jajargenjang s2 :"))

let luaa = p * l
console.log ("Luas jajargenjang adalah", luaa)

let kelii = 2 * (s1 + s2)
console.log ("Keliling jajargenjang adalah", kelii)

