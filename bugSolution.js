```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("6502a88d7861234567890")}, {"$inc": {"field": 1}});
```