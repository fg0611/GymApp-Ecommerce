# Escenarios

## 1-Crear Orden

### Crea una nueva orden por defecto es de tipo CART, si no carga productos devuelve error 404, si existe de vuelve error 404

### POST /orders/create

```js
const body = {
        userId,
//array de productos, con id y cantidad
        products:[
            {
                productId,
                quantity
            },
            {
                productId,
                quantity
            },
        ]
    }
```

### Modelo de consutla POST /orders/create

```js
{
  "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
    "products": [
      {
        "productId": 3,
        "quantity": 13
      },
      {
        "productId": 2,
        "quantity": 6
      },
      {
        "productId": 1,
        "quantity": 6
      }
    ]
}
```

## 2-Update Orden

### Modifica cualquier dato que se pase por body, debe recibir orderID por params, si es de tipo CART, modifica las cantidades de los productos. Todos los datos del body, son opcionales.

### PUT /orders/update/:id

```js
body = {
      orderState,
      shippingState,
      shippingLocation,
      paymentState,      
      products,
//array de uno o varios productos, con id y cantidad
  products:[
      {
          productId,
          quantity
      },
      {
          productId,
          quantity
      },
  ]
}
```

### Modelo de consutlas PUT /orders/update

```js
//Consulta 1
//localhost:3001/orders/update/869aa921-e7be-4169-8f95-4ced11d093c8
{
  "products": [
    {
      "productId": 3,
      "quantity": 33
    },
    {
      "productId": 4,
      "quantity": 44
    }
  ]
}
//Consulta 2
//localhost:3001/orders/update/869aa921-e7be-4169-8f95-4ced11d093c8
{
  "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
    "orderState": "PENDING"
}
```
## 3-Delete Orden

### Elimina una order, segun su id, para el caso de cancelar cart o el administrador quiera eliminar alguna orden.

### DELETE /orders/delete/:id

```js
const body = {
        userId,
//array de productos, con id y cantidad
        products:[
            {
                productId,
                quantity
            },
            {
                productId,
                quantity
            },
        ]
    }
```

### Modelo de consutla DELETE /orders/delete

### localhost:3001/orders/delete/d02baf64-58cd-422c-9c0f-122708f8f534

## 4-GET Orden por ID

### Obtiene una order completa con product y user, de cualquier estado por su ID.

### GET /orders/:id

### Modelo de consutla DELETE /orders/delete

### localhost:3001/orders/delete/d02baf64-58cd-422c-9c0f-122708f8f534

# 5-GET todas las ordenes

### Obtiene todas las ordenes, existentes.

### GET /orders

### Modelo de consutla DELETE /orders/delete

### localhost:3001/orders

# 6-GET todas las ordenes de un usuario

### Obtiene todas las ordenes, existentes.

### GET /orders/user/:id
### Modelo de consutla DELETE /orders/delete

### localhost:3001/orders

## 7-Delete Product, cuando se elimina de carrito

### Recibe por body el userId y el productId, y elimina el producto si existe una order con estado CART y ese producto, de lo contrario devuelve error 404

### Modelo de consutla DELETE /orders/delete

```js
{
  "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
    "productId": 2
}
```
## Consulta Ruta prueba - Obtener order por orderId

### Recordar que tiene que existir la orden para poder eliminar productos
```js
//Consulta 1
//GET localhost:3001/order/f9bc2d5e-111b-4214-b581-e67e216b936e
```
# Lo que si gue no esta terminado.
## 3-Cambiar stock de products, cuando orderState === 'processing'

```js
//Ruta
//PUT /no se todavía la ruta
//Back recibe body:
const body = {
        orderState === 'processing'
        userId,
        productsId:[]
    }
```


## Json que devuelve la ruta getOrdersByUserId
Modelo
```js
[
  {
    "id": "7155b2bd-ece6-438a-b665-c76033564aac",
    "orderState": "CART",
    "shippingState": "not initialized",
    "shippingLocation": "not initialized",
    "paymentState": "not initialized",
    "createdAt": "2021-07-18T22:01:27.968Z",
    "updatedAt": "2021-07-18T22:01:28.068Z",
    "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
    "products": [
      {
        "id": 1,
        "name": "True Made Whey Protein",
        "description": "ENA TRUEMADE WHEY PROTEIN 2LBS - 30 MEDIDAS BLEND DE PROTEINA ISOLADA + CONCENTRADA",
        "images": [
          "https://http2.mlstatic.com/D_NQ_NP_2X_871368-MLA31115313342_062019-F.webp",
          "https://http2.mlstatic.com/D_NQ_NP_701787-MLA41888172848_052020-O.webp"
        ],
        "price": 2250,
        "stock": 3,
        "Order_Product": {
          "price": 2250,
          "quantity": 1,
          "orderId": "7155b2bd-ece6-438a-b665-c76033564aac",
          "productId": 1
        }
      }
    ],
    "user": {
      "id": "d1687b07-058c-414a-bb5a-77a8d897be57",
      "email": "knutwaale@gmail.com",
      "password": "1234",
      "userType": "S",
      "firstName": "Knut",
      "lastName": "Waale"
    }
  },
  {
    "id": "84133c87-bf34-49f2-97d7-32c682e7d341",
    "orderState": "CART",
    "shippingState": "not initialized",
    "shippingLocation": "not initialized",
    "paymentState": "not initialized",
    "createdAt": "2021-07-18T22:01:31.108Z",
    "updatedAt": "2021-07-18T22:01:31.164Z",
    "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
    "products": [
      {
        "id": 1,
        "name": "True Made Whey Protein",
        "description": "ENA TRUEMADE WHEY PROTEIN 2LBS - 30 MEDIDAS BLEND DE PROTEINA ISOLADA + CONCENTRADA",
        "images": [
          "https://http2.mlstatic.com/D_NQ_NP_2X_871368-MLA31115313342_062019-F.webp",
          "https://http2.mlstatic.com/D_NQ_NP_701787-MLA41888172848_052020-O.webp"
        ],
        "price": 2250,
        "stock": 3,
        "Order_Product": {
          "price": 2250,
          "quantity": 1,
          "orderId": "84133c87-bf34-49f2-97d7-32c682e7d341",
          "productId": 1
        }
      }
    ],
    "user": {
      "id": "d1687b07-058c-414a-bb5a-77a8d897be57",
      "email": "knutwaale@gmail.com",
      "password": "1234",
      "userType": "S",
      "firstName": "Knut",
      "lastName": "Waale"
    }
  },
  {
    "id": "4dc04d29-1b06-4358-a236-d7db0649be67",
    "orderState": "CART",
    "shippingState": "not initialized",
    "shippingLocation": "not initialized",
    "paymentState": "not initialized",
    "createdAt": "2021-07-18T22:01:34.501Z",
    "updatedAt": "2021-07-18T22:01:34.615Z",
    "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
    "products": [
      {
        "id": 1,
        "name": "True Made Whey Protein",
        "description": "ENA TRUEMADE WHEY PROTEIN 2LBS - 30 MEDIDAS BLEND DE PROTEINA ISOLADA + CONCENTRADA",
        "images": [
          "https://http2.mlstatic.com/D_NQ_NP_2X_871368-MLA31115313342_062019-F.webp",
          "https://http2.mlstatic.com/D_NQ_NP_701787-MLA41888172848_052020-O.webp"
        ],
        "price": 2250,
        "stock": 3,
        "Order_Product": {
          "price": 2250,
          "quantity": 1,
          "orderId": "4dc04d29-1b06-4358-a236-d7db0649be67",
          "productId": 1
        }
      }
    ],
    "user": {
      "id": "d1687b07-058c-414a-bb5a-77a8d897be57",
      "email": "knutwaale@gmail.com",
      "password": "1234",
      "userType": "S",
      "firstName": "Knut",
      "lastName": "Waale"
    }
  }
]
```
