# 📘 API Documentation – `GET /api/views/:model`

This endpoint returns the list of views configured for a given model. Each view describes how data for the model should be displayed in the admin interface (e.g., table view, form layout, etc.).

---

## 📌 Endpoint Details

| Method | URL                 | URL Parameter   | Auth Required | Response Code | Content-Type       |
|--------|---------------------|-----------------|---------------|---------------|--------------------|
| GET    | `/api/views/:model` | `model: string` | ?             | `200 OK`      | `application/json` |

---

## 📤 Response Model

The response is an array of `AdminView` objects that define available views for the requested model.

### `AdminView`

| Field       | Type      | Description                                          |
|-------------|-----------|------------------------------------------------------|
| `name`      | `string`  | Internal name of the view                            |
| `label`     | `string`  | Display label of the view                            |
| `model`     | `string`  | Name of the related model                            |
| `type`      | `string`  | Type of view (e.g., `"list"`, `"form"`, `"kanban"`)  |
| `is_main`   | `boolean` | Whether this view is the default view for the model  |
| `fields`    | `Field[]` | List of fields to be displayed                       |
| `form_view` | `string`  | Optional fallback view name to use in form rendering |

---

### `Field`

| Field   | Type     | Description             |
|---------|----------|-------------------------|
| `name`  | `string` | Field identifier        |
| `label` | `string` | Display label for field |

---

## 🔄 Example Response

```json
[
  {
    "name": "default_table",
    "label": "Table View",
    "model": "user",
    "type": "list",
    "is_main": true,
    "fields": [
      { "name": "username", "label": "Username" },
      { "name": "email", "label": "Email" }
    ],
    "form_view": "default_form"
  },
  {
    "name": "default_form",
    "label": "Form View",
    "model": "user",
    "type": "form",
    "is_main": false,
    "fields": [
      { "name": "username", "label": "Username" },
      { "name": "email", "label": "Email" },
      { "name": "is_active", "label": "Active" }
    ]
  }
]
