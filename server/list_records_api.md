# 📘 API Documentation – `GET /api/:model`

This endpoint returns the list of all records for a given model. 

---

## 📌 Endpoint Details

| Method | URL           | URL Parameter   | Auth Required | Response Code | Content-Type       |
|--------|---------------|-----------------|---------------|---------------|--------------------|
| GET    | `/api/:model` | `model: string` | ❓             | `200 OK`      | `application/json` |

---

## 📤 Response model

The response is an array of generic `RecordData` objects.

### `RecordData`

| Field             | Type                 | Description                                 |
|-------------------|----------------------|---------------------------------------------|
| `id`              | `string \| number`   | Unique identifier of the record             |
| `[key: string]`   | `any`                | All other dynamic fields of the model       |

📝 `RecordData` is a flexible dictionary-like structure that adapts to the shape of the underlying model.

---

## 🔄 Example Response (`GET /api/user`)

```json
[
  {
    "id": 1,
    "username": "jdoe",
    "email": "jdoe@example.com",
    "is_active": true
  },
  {
    "id": 2,
    "username": "asmith",
    "email": "asmith@example.com",
    "is_active": false
  }
]
