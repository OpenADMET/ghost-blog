"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderText = renderText;
function renderText(data) {
    return `Your gift is ready to share!

Thank you for supporting ${data.siteTitle}. Send the link below to share your gift with whoever you'd like.

Gift subscription: ${data.gift.tierName} • ${data.gift.cadenceLabel}

Gift link: ${data.gift.link}

This link expires on ${data.gift.expiresAt} and can be redeemed once by anyone who isn't already a paid member of ${data.siteTitle}.

---

Sent to ${data.toEmail} from ${data.siteDomain}.
You received this email because you purchased a gift subscription on ${data.siteTitle}.`;
}
