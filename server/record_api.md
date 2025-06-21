# 📘 API Documentation – `GET /api/:model/:id`

This endpoint retrieves a single record from the specified model using the record’s unique identifier.

---

## 📌 Endpoint Details

| Method | URL               | URL Parameters                | Auth Required | Response Code | Content-Type       |
|--------|-------------------|-------------------------------|---------------|---------------|--------------------|
| GET    | `/api/:model/:id` | `model: string`, `id: string` | ?             | `200 OK`      | `application/json` |

---

## 📤 Response Type

Returns a single `RecordData` object, dynamically shaped according to the model’s schema.

### `RecordData`

| Field           | Type               | Description                                 |
|-----------------|--------------------|---------------------------------------------|
| `id`            | `string \| number` | Unique identifier of the record             |
| `[key: string]` | `any`              | Other model-specific fields                 |

📝 The response shape is dynamic and depends on the structure of the model specified in `:model`.

---

## 🔄 Example Response (`GET /api/user/1`)

```json
{
  "id": 1,
  "username": "jdoe",
  "email": "jdoe@example.com",
  "is_active": true
}
