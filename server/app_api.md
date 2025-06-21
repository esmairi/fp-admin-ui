# 📘 API Documentation – `GET /api/apps`

This endpoint exposes all registered applications and their associated models. The response is strictly typed to the `AppModel` interface.

---

## 📌 Endpoint Details

| Method | URL         | Auth Required | Response Code | Content-Type       |
|--------|-------------|---------------|---------------|--------------------|
| GET    | `/api/apps` | ❓             | `200 OK`      | `application/json` |
| GET    | `/api/apps` | ❓             | `401 KO`      | `application/json` |

---

## 🧾 Response model

Each item in the response is an `AppModel` with this structure:

### `AppModel`

| Field       | Type              | Description                          |
|-------------|-------------------|--------------------------------------|
| `name`      | `string`          | Internal name of the application     |
| `label`     | `string`          | Human-readable label                 |
| `models`    | `ModelInfo[]`     | Array of models registered under app |

### `ModelInfo`

| Field          | Type     | Description                                  |
|----------------|----------|----------------------------------------------|
| `name`         | `string` | Model name                                   |
| `label`        | `string` | Human-readable model label                   |
| `url`          | `string` | URL to fetch the model’s data                |
| `default_view` | `string` | Default display style: `table`, `grid`, etc. |

---

## 🔄 Example Response

```json
[
  {
    "name": "users",
    "label": "User Management",
    "models": [
      {
        "name": "user",
        "label": "User",
        "url": "/api/models/users/user",
        "default_view": "table"
      }
    ]
  },
  {
    "name": "products",
    "label": "Product Catalog",
    "models": [
      {
        "name": "product",
        "label": "Product",
        "url": "/api/models/products/product",
        "default_view": "grid"
      }
    ]
  }
]
