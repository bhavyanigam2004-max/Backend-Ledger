const mongoose = require("mongoose");

const tokenBlacklistSchema = mongoose.Schema({
    token: {
        type: String,
        required:  [ true, "Token is required to blacklist" ],
        unique: [ true, "Token is already blacklisted" ]
    }
}, {
    timestamps: true
});

tokenBlacklistSchema.index({ createdAt: 1 }, {
    expireAfterSeconds: 60 * 60 * 24 * 3 // 3 days
})

const tokenBlackListModel = mongoose.models.tokenBlacklist || mongoose.model("tokenBlacklist", tokenBlacklistSchema)

module.exports = tokenBlackListModel;