---
sidebar_position: 2
title: "Data Types"
---

### User

| USER      |
| --------- | ------------------------------ |
| id        | uuid                           |
| username  | string                         |
| password  | string                         |
| address   | <a href="#address">Address</a> |
| createdAt | Date \| string                 |
| updatedAt | Date \| string                 |
| orders    | <a href="#order">Order</a>[]   |
| plan      | <a href="#plan">Plan</a>       |

### Order

| ORDER     |
| --------- | ---------------------------------- |
| id        | uuid                               |
| user      | <a href="#user">User</a> \| string |
| monetary  | <a href="#monetary">Monetary</a>   |
| itemCount | number                             |
| createdAt | Date \| string                     |
| updatedAt | Date \| string                     |
| delivered | <a href="#delivery">Delivery</a>   |

### Plan

| PLAN      |
| --------- | -------------------------------- |
| id        | uuid                             |
| monetary  | <a href="#monetary">Monetary</a> |
| createdAt | Date \| string                   |
| updatedAt | Date \| string                   |
| duration  | number                           |

### Monetary

| MONETARY     |
| ------------ | -------------------------------- |
| id           | uuid                             |
| amount       | number                           |
| currency     | <a href="#currency">Currency</a> |
| exchangeRate | number                           |

### Currency

```ts
enum Currency {
  CAD,
  INR,
  USD,
}
```

### Delivery

| MONETARY     |
| ------------ | ------------------------------------ |
| id           | uuid                                 |
| order        | <a href="#order">Order</a> \| string |
| currency     | <a href="#currency">Currency</a>     |
| exchangeRate | number                               |

### Address

```ts
interface Address {
  street: {
    no: number;
    name: string;
  };
  city: string;
  province: string;
  postalCode: string;
}
```
