# interpolation
t € [0,1] (valeur d'un point t positionné entre A-B)
A+t*(B-A)

nb: milieu de 2 point 0.5*(B+A)
nb: courbe de bézier

#Thales
AB^2+BC^2=AC^2

#Vecteur
direction, sens, longueur
- agrandissement (multiplication)
- déplacement
- rotation

#Matrices
[AB
CD]
x' = ax + by + Tx
y' = cx + dx + Tx
z' = ex + fy + Tx

avec + Tx un déplacement donné

ex: matrice de rotation 2d (matrice a 3):
[cosB -sinB
sinB sinB]

ex: 3d (matrice a 4)

#quaternion
voir
axe : vecteur unitaire normalisé

#fonctions usuelles:
- domaine definition,
- dérivabilité,
- limites,
- derivée,
- tableau de variation avec maxima locaux

- voir interpolation de function via jonction de tangentes
- interpolation [0, 1] avant calcul sur 2 fonction =  plus simple pour la multiplication

ex: f(x)=cos(x Math.pi()) * 1/2 + 1/2;
ex: f(x)= x^2

nb: grgrdvrt.com/sketches/

nb: fonction tween desynchronisé pour gérer de l'aléatoire

#Agent
effet élastique : changement de position via vitesse
Si 2pts A-B. L'un dirigeant vers l'autre.

V2 = V1*f + S(Pb - Pa)

avec s : spring (coeff de ressort)
et f (coeff de 1/friction, generalement [0, 1])
