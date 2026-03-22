"use client";
import { useEffect, useRef } from "react";

/* ───────── DATA ───────── */
const NODES = [
  {id:'brahma', x:0, y:-860, type:'deity', icon:'\u2728', name:'\u092D\u0917\u0935\u093E\u0928 \u092C\u094D\u0930\u0939\u094D\u092E\u093E', dev:'\u092C\u094D\u0930\u0939\u094D\u092E\u093E', era:'\u0938\u0943\u0937\u094D\u091F\u093F\u0915\u0930\u094D\u0924\u093E', desc:'\u0938\u0943\u0937\u094D\u091F\u093F\u0915\u0930\u094D\u0924\u093E \u2014 \u091C\u093F\u0928\u0915\u0940 \u0926\u093F\u0935\u094D\u092F \u0924\u094D\u0935\u091A\u093E (\u0924\u094D\u0935\u0915\u094D) \u0938\u0947 \u092E\u0939\u0930\u094D\u0937\u093F \u092D\u0943\u0917\u0941 \u092E\u093E\u0928\u0938\u092A\u0941\u0924\u094D\u0930 \u0915\u0947 \u0930\u0942\u092A \u092E\u0947\u0902 \u091C\u0928\u094D\u092E\u0947\u0964 \u092C\u094D\u0930\u0939\u094D\u092E\u093E \u0938\u092E\u0938\u094D\u0924 \u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u0935\u0902\u0936 \u0915\u0947 \u092A\u0930\u092E \u092C\u094D\u0930\u0939\u094D\u092E\u093E\u0902\u0921\u0940\u092F \u092A\u0942\u0930\u094D\u0935\u091C \u0939\u0948\u0902\u0964', tags:['\u0938\u0943\u0937\u094D\u091F\u093F\u0915\u0930\u094D\u0924\u093E','\u092A\u094D\u0930\u091C\u093E\u092A\u0924\u093F','\u0935\u0948\u0926\u093F\u0915'], col:'c'},
  {id:'bhrigu', x:0, y:-670, type:'root', icon:'\uD83C\uDF1F', name:'\u092E\u0939\u0930\u094D\u0937\u093F \u092D\u0943\u0917\u0941', dev:'\u092E\u0939\u0930\u094D\u0937\u093F \u092D\u0943\u0917\u0941', era:'\u0935\u0948\u0926\u093F\u0915 \u00B7 \u0938\u092A\u094D\u0924\u0930\u094D\u0937\u093F', desc:'\u0938\u093E\u0924 \u0938\u092A\u094D\u0924\u0930\u094D\u0937\u093F\u092F\u094B\u0902 \u092E\u0947\u0902 \u0938\u0947 \u090F\u0915\u0964 \u092D\u0943\u0917\u0941 \u0938\u0902\u0939\u093F\u0924\u093E \u0915\u0947 \u0930\u091A\u092F\u093F\u0924\u093E \u2014 \u096B,\u0966\u0966,\u0966\u0966\u0966 \u0938\u0947 \u0905\u0927\u093F\u0915 \u091C\u094D\u092F\u094B\u0924\u093F\u0937\u0940\u092F \u091C\u0928\u094D\u092E\u092A\u0924\u094D\u0930\u093F\u0915\u093E\u090F\u0901\u0964 \u0936\u094D\u0930\u0940\u0915\u0943\u0937\u094D\u0923 \u0928\u0947 \u092D\u0917\u0935\u0926\u094D\u0917\u0940\u0924\u093E (\u0967\u0966.\u0968\u096B) \u092E\u0947\u0902 \u0918\u094B\u0937\u093F\u0924 \u0915\u093F\u092F\u093E: \u201C\u092E\u0939\u0930\u094D\u0937\u0940\u0923\u093E\u0902 \u092D\u0943\u0917\u0941\u0930\u0939\u092E\u094D\u0964\u201D \u0932\u0915\u094D\u0937\u094D\u092E\u0940 (\u092D\u093E\u0930\u094D\u0917\u0935\u0940) \u0915\u0947 \u092A\u093F\u0924\u093E\u0964 \u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u0917\u094B\u0924\u094D\u0930 \u0907\u0928\u094D\u0939\u0940\u0902 \u092E\u0939\u093E\u0928 \u090B\u0937\u093F \u0938\u0947 \u091C\u0941\u0921\u093C\u093E \u0939\u0948\u0964', tags:['\u0938\u092A\u094D\u0924\u0930\u094D\u0937\u093F','\u0917\u094B\u0924\u094D\u0930 \u0938\u0902\u0938\u094D\u0925\u093E\u092A\u0915','\u092D\u0917\u0935\u0926\u094D\u0917\u0940\u0924\u093E'], col:'s'},
  {id:'lakshmi', x:-300, y:-490, type:'deity', icon:'\uD83E\uDEB7', name:'\u0932\u0915\u094D\u0937\u094D\u092E\u0940 (\u092D\u093E\u0930\u094D\u0917\u0935\u0940)', dev:'\u0932\u0915\u094D\u0937\u094D\u092E\u0940 \u00B7 \u092D\u093E\u0930\u094D\u0917\u0935\u0940', era:'\u0926\u093F\u0935\u094D\u092F \u092A\u0930\u093F\u0935\u093E\u0930', desc:'\u092D\u0943\u0917\u0941 \u0915\u0940 \u092A\u0941\u0924\u094D\u0930\u0940 \u2014 \u092D\u0917\u0935\u093E\u0928 \u0935\u093F\u0937\u094D\u0923\u0941 \u0938\u0947 \u0935\u093F\u0935\u093E\u0939 \u0915\u093F\u092F\u093E\u0964 \u092D\u093E\u0930\u094D\u0917\u0935\u0940 \u0915\u0939\u0932\u093E\u0924\u0940 \u0939\u0948\u0902\u0964 \u092D\u0943\u0917\u0941 \u0935\u0902\u0936\u0940 \u0939\u094B\u0928\u0947 \u0915\u0947 \u0915\u093E\u0930\u0923 \u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u092A\u0930\u093F\u0935\u093E\u0930 \u0938\u094D\u0935\u092F\u0902 \u0927\u0928 \u0915\u0940 \u0926\u0947\u0935\u0940 \u0932\u0915\u094D\u0937\u094D\u092E\u0940 \u0938\u0947 \u0935\u0902\u0936\u0940\u092F \u0938\u0902\u092C\u0902\u0927 \u0930\u0916\u0924\u093E \u0939\u0948\u0964', tags:['\u092D\u0943\u0917\u0941-\u092A\u0941\u0924\u094D\u0930\u0940','\u0927\u0928 \u0915\u0940 \u0926\u0947\u0935\u0940'], col:'c'},
  {id:'shukra', x:300, y:-490, type:'deity', icon:'\u2B50', name:'\u0936\u0941\u0915\u094D\u0930\u093E\u091A\u093E\u0930\u094D\u092F', dev:'\u0936\u0941\u0915\u094D\u0930\u093E\u091A\u093E\u0930\u094D\u092F', era:'\u0926\u093F\u0935\u094D\u092F \u092A\u0930\u093F\u0935\u093E\u0930', desc:'\u092D\u0943\u0917\u0941 \u0915\u0947 \u092A\u0941\u0924\u094D\u0930 \u2014 \u0905\u0938\u0941\u0930\u094B\u0902 \u0915\u0947 \u0917\u0941\u0930\u0941\u0964 \u092D\u0917\u0935\u093E\u0928 \u0936\u093F\u0935 \u0928\u0947 \u0909\u0928\u094D\u0939\u0947\u0902 \u0938\u0902\u091C\u0940\u0935\u0928\u0940 \u0935\u093F\u0926\u094D\u092F\u093E (\u092E\u0943\u0924\u094D\u092F\u0941 \u092A\u0930 \u0935\u093F\u091C\u092F \u0915\u0940 \u0936\u0915\u094D\u0924\u093F) \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0940\u0964 \u092D\u0943\u0917\u0941 \u0935\u0902\u0936 \u0915\u0947 \u092A\u094D\u0930\u0924\u094D\u092F\u0915\u094D\u0937 \u092A\u0942\u0930\u094D\u0935\u091C\u0964', tags:['\u092D\u0943\u0917\u0941-\u092A\u0941\u0924\u094D\u0930','\u0905\u0938\u0941\u0930\u0917\u0941\u0930\u0941','\u0938\u0902\u091C\u0940\u0935\u0928\u0940'], col:'c'},
  {id:'jamadagni', x:0, y:-490, type:'deity', icon:'\uD83D\uDD25', name:'\u091C\u092E\u0926\u0917\u094D\u0928\u093F', dev:'\u091C\u092E\u0926\u0917\u094D\u0928\u093F', era:'\u092D\u0943\u0917\u0941 \u0935\u0902\u0936', desc:'\u092D\u0943\u0917\u0941 \u0915\u0947 \u0935\u0902\u0936\u091C \u0914\u0930 \u092A\u0930\u0936\u0941\u0930\u093E\u092E \u0915\u0947 \u092A\u093F\u0924\u093E \u2014 \u0935\u093F\u0937\u094D\u0923\u0941 \u0915\u0947 \u091B\u0920\u0947 \u0905\u0935\u0924\u093E\u0930\u0964 \u091C\u092E\u0926\u0917\u094D\u0928\u093F \u0905\u0938\u093E\u0927\u093E\u0930\u0923 \u0936\u0915\u094D\u0924\u093F \u0935\u093E\u0932\u0947 \u090B\u0937\u093F \u0925\u0947 \u091C\u093F\u0928\u0915\u093E \u091C\u0940\u0935\u0928 \u092E\u0939\u093E\u092D\u093E\u0930\u0924 \u0914\u0930 \u092A\u0941\u0930\u093E\u0923\u094B\u0902 \u092E\u0947\u0902 \u0935\u0930\u094D\u0923\u093F\u0924 \u0939\u0948\u0964', tags:['\u092D\u0943\u0917\u0941-\u0935\u0902\u0936\u091C','\u092A\u0930\u0936\u0941\u0930\u093E\u092E-\u092A\u093F\u0924\u093E'], col:'c'},
  {id:'parashurama', x:0, y:-320, type:'deity', icon:'\uD83E\uDE93', name:'\u092A\u0930\u0936\u0941\u0930\u093E\u092E', dev:'\u092A\u0930\u0936\u0941\u0930\u093E\u092E', era:'\u0924\u094D\u0930\u0947\u0924\u093E \u092F\u0941\u0917 \u00B7 \u096C\u0920\u0947 \u0905\u0935\u0924\u093E\u0930', desc:'\u092D\u0917\u0935\u093E\u0928 \u0935\u093F\u0937\u094D\u0923\u0941 \u0915\u0947 \u091B\u0920\u0947 \u0905\u0935\u0924\u093E\u0930 \u2014 \u092D\u0943\u0917\u0941 \u0935\u0902\u0936 \u092E\u0947\u0902 \u091C\u092E\u0926\u0917\u094D\u0928\u093F \u0915\u0947 \u092A\u0941\u0924\u094D\u0930\u0964 \u0935\u0939 \u092F\u094B\u0926\u094D\u0927\u093E-\u092C\u094D\u0930\u093E\u0939\u094D\u092E\u0923 \u091C\u093F\u0938\u0928\u0947 \u092A\u0943\u0925\u094D\u0935\u0940 \u0915\u094B \u0926\u0941\u0937\u094D\u091F \u0915\u094D\u0937\u0924\u094D\u0930\u093F\u092F\u094B\u0902 \u0938\u0947 \u0968\u0967 \u092C\u093E\u0930 \u092E\u0941\u0915\u094D\u0924 \u0915\u093F\u092F\u093E\u0964 \u092D\u0943\u0917\u0941 \u0935\u0902\u0936\u0940 \u0939\u094B\u0928\u0947 \u0915\u0947 \u0915\u093E\u0930\u0923 \u092A\u0930\u0936\u0941\u0930\u093E\u092E \u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u0915\u0947 \u0926\u093F\u0935\u094D\u092F \u092A\u0942\u0930\u094D\u0935\u091C \u0939\u0948\u0902\u0964', tags:['\u0935\u093F\u0937\u094D\u0923\u0941 \u0905\u0935\u0924\u093E\u0930','\u092D\u0943\u0917\u0941 \u0935\u0902\u0936','\u092F\u094B\u0926\u094D\u0927\u093E \u092C\u094D\u0930\u093E\u0939\u094D\u092E\u0923'], col:'c'},
  {id:'doneriya', x:0, y:-140, type:'key', icon:'\uD83C\uDFDB\uFE0F', name:'\u0921\u094B\u0928\u0947\u0930\u093F\u092F\u093E \u092C\u094D\u0930\u093E\u0939\u094D\u092E\u0923', dev:'\u0921\u094B\u0928\u0947\u0930\u093F\u092F\u093E \u092C\u094D\u0930\u093E\u0939\u094D\u092E\u0923', era:'\u0938\u0902\u0935\u0924 \u092A\u0942\u0930\u094D\u0935-\u0967\u0969\u0967\u0966 \u00B7 \u092E\u0942\u0932 \u092A\u0939\u091A\u093E\u0928', desc:'\u0926\u093F\u0935\u094D\u092F \u092A\u0926\u0935\u0940 \u0938\u0947 \u092A\u0939\u0932\u0947 \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u093E \u092E\u0942\u0932 \u0928\u093E\u092E\u0964 \u0921\u094B\u0928\u0947\u0930\u0917\u0922\u093C \u0915\u0947 \u0921\u094B\u0928\u0947\u0930\u093F\u092F\u093E \u092C\u094D\u0930\u093E\u0939\u094D\u092E\u0923 \u2014 \u092F\u091C\u0941\u0930\u094D\u0935\u0947\u0926, \u092E\u093E\u0927\u094D\u092F\u0902\u0926\u093F\u0928\u0940 \u0936\u093E\u0916\u093E, \u092D\u0943\u0917\u0941 \u0917\u094B\u0924\u094D\u0930 \u0915\u0947 \u0928\u093F\u0937\u094D\u0920\u093E\u0935\u093E\u0928 \u0905\u0928\u0941\u092F\u093E\u092F\u0940\u0964 \u0909\u0928\u0915\u0940 \u0935\u0948\u0926\u093F\u0915 \u0938\u093E\u0927\u0928\u093E \u0915\u0908 \u092A\u0940\u0922\u093C\u093F\u092F\u094B\u0902 \u0924\u0915 \u0905\u091F\u0942\u091F \u0930\u0939\u0940\u0964', tags:['\u092E\u0942\u0932 \u092A\u0939\u091A\u093E\u0928','\u0921\u094B\u0928\u0947\u0930\u0917\u0922\u093C','\u092F\u091C\u0941\u0930\u094D\u0935\u0947\u0926'], col:'s'},
  {id:'kishandas', x:0, y:60, type:'root', icon:'\uD83D\uDD49\uFE0F', name:'\u0915\u093F\u0936\u0928\u0926\u093E\u0938 \u091C\u0940', dev:'\u0915\u093F\u0936\u0928\u0926\u093E\u0938 \u091C\u0940', era:'\u0938\u0902\u0935\u0924 \u0967\u0969\u0967\u0966 \u00B7 \u2248 \u0967\u0968\u096B\u0969 \u0908.', desc:'\u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u0928\u093E\u092E \u0915\u0947 \u0938\u0902\u0938\u094D\u0925\u093E\u092A\u0915\u0964 \u0921\u094B\u0928\u0947\u0930\u093F\u092F\u093E \u092C\u094D\u0930\u093E\u0939\u094D\u092E\u0923 \u092E\u0947\u0902 \u091C\u0928\u094D\u092E\u0947, \u0926\u0936\u0915\u094B\u0902 \u0924\u0915 \u0917\u0939\u0928 \u0924\u092A\u0938\u094D\u092F\u093E \u0915\u0940\u0964 \u0926\u094D\u0935\u093E\u0930\u0915\u093E \u0915\u0940 \u0924\u0940\u0930\u094D\u0925\u092F\u093E\u0924\u094D\u0930\u093E \u0914\u0930 \u0921\u0942\u092C\u0940 \u0939\u0941\u0908 \u092A\u0935\u093F\u0924\u094D\u0930 \u0928\u0917\u0930\u0940 \u092E\u0947\u0902 \u0936\u094D\u0930\u0940\u0915\u0943\u0937\u094D\u0923 \u0938\u0947 \u0926\u093F\u0935\u094D\u092F \u092D\u0947\u0902\u091F \u0928\u0947 \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0940 \u092A\u0939\u091A\u093E\u0928 \u0915\u094B \u0938\u0926\u093E \u0915\u0947 \u0932\u093F\u090F \u092C\u0926\u0932 \u0926\u093F\u092F\u093E\u0964 \u0915\u0943\u0937\u094D\u0923 \u0928\u0947 \u0915\u0939\u093E: \u201C\u0906\u0913, \u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E\u0964\u201D', tags:['\u092A\u0926\u0935\u0940 \u0938\u0902\u0938\u094D\u0925\u093E\u092A\u0915','\u0924\u092A\u0938\u094D\u0935\u0940','\u0926\u094D\u0935\u093E\u0930\u0915\u093E','\u092A\u093F\u0924\u093E\u092E\u0939'], col:'s'},
  {id:'krishna', x:-360, y:60, type:'deity', icon:'\uD83E\uDD9A', name:'\u092D\u0917\u0935\u093E\u0928 \u0936\u094D\u0930\u0940\u0915\u0943\u0937\u094D\u0923', dev:'\u0936\u094D\u0930\u0940 \u0915\u0943\u0937\u094D\u0923', era:'\u0926\u094D\u0935\u093E\u0930\u0915\u093E', desc:'\u0935\u093F\u0937\u094D\u0923\u0941 \u0915\u0947 \u0906\u0920\u0935\u0947\u0902 \u0905\u0935\u0924\u093E\u0930 \u2014 \u0926\u094D\u0935\u093E\u0930\u0915\u093E \u0915\u0947 \u0938\u094D\u0935\u093E\u092E\u0940\u0964 \u0915\u0943\u0937\u094D\u0923 \u0928\u0947 \u0939\u0940 \u0905\u0930\u092C \u0938\u093E\u0917\u0930 \u092E\u0947\u0902 \u0921\u0942\u092C\u0940 \u092A\u0935\u093F\u0924\u094D\u0930 \u0928\u0917\u0930\u0940 \u092E\u0947\u0902 \u0915\u093F\u0936\u0928\u0926\u093E\u0938 \u091C\u0940 \u0915\u094B \u201C\u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E\u201D \u0915\u0939\u0915\u0930 \u0938\u0902\u092C\u094B\u0927\u093F\u0924 \u0915\u093F\u092F\u093E\u0964 \u0907\u0938 \u0926\u093F\u0935\u094D\u092F \u0909\u0926\u094D\u0917\u093E\u0930 \u0928\u0947 \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0940 \u092A\u0939\u091A\u093E\u0928 \u0938\u0926\u093E \u0915\u0947 \u0932\u093F\u090F \u092C\u0926\u0932 \u0926\u0940\u0964', tags:['\u0926\u094D\u0935\u093E\u0930\u0915\u093E','\u0906\u0920\u0935\u093E\u0901 \u0905\u0935\u0924\u093E\u0930','\u092A\u0926\u0935\u0940 \u092A\u094D\u0930\u0926\u093E\u0924\u093E'], col:'c'},
  {id:'ocean', x:-185, y:230, type:'event', icon:'\uD83C\uDF0A', name:'\u0938\u092E\u0941\u0926\u094D\u0930 \u092A\u094D\u0930\u0935\u0947\u0936', dev:'\u0938\u092E\u0941\u0926\u094D\u0930 \u092A\u094D\u0930\u0935\u0947\u0936', era:'\u0926\u094D\u0935\u093E\u0930\u0915\u093E \u0915\u093E \u091A\u092E\u0924\u094D\u0915\u093E\u0930', desc:'\u0926\u094D\u0935\u093E\u0930\u0915\u093E \u092E\u0947\u0902 \u0915\u093F\u0936\u0928\u0926\u093E\u0938 \u091C\u0940 \u0915\u094B \u092C\u0924\u093E\u092F\u093E \u0917\u092F\u093E \u0915\u093F \u0905\u0938\u0932\u0940 \u0928\u0917\u0930\u0940 \u0938\u092E\u0941\u0926\u094D\u0930 \u0915\u0947 \u092D\u0940\u0924\u0930 \u0939\u0948\u0964 \u092A\u0942\u0930\u094D\u0923 \u0935\u093F\u0936\u094D\u0935\u093E\u0938 \u0915\u0947 \u0938\u093E\u0925 \u0935\u0947 \u0905\u0930\u092C \u0938\u093E\u0917\u0930 \u092E\u0947\u0902 \u0909\u0924\u0930\u0947\u0964 \u092A\u0941\u0930\u093E\u0924\u0924\u094D\u0935 (\u0967\u096F\u096E\u0969\u2013\u0967\u096F\u096F\u0966) \u0928\u0947 \u2248\u0967\u096B\u0966\u0966 \u0908\u0938\u093E \u092A\u0942\u0930\u094D\u0935 \u0915\u0940 \u0921\u0942\u092C\u0940 \u0938\u0902\u0930\u091A\u0928\u093E\u090F\u0901 \u092A\u094D\u0930\u092E\u093E\u0923\u093F\u0924 \u0915\u0940\u0902\u0964 \u0909\u0928 \u092A\u0935\u093F\u0924\u094D\u0930 \u0917\u0939\u0930\u093E\u0907\u092F\u094B\u0902 \u092E\u0947\u0902 \u0915\u0943\u0937\u094D\u0923 \u0928\u0947 \u0909\u0928\u0915\u093E \u0928\u092F\u093E \u0928\u093E\u092E \u0909\u091A\u094D\u091A\u093E\u0930\u093F\u0924 \u0915\u093F\u092F\u093E\u0964', tags:['\u0926\u093F\u0935\u094D\u092F \u091A\u092E\u0924\u094D\u0915\u093E\u0930','\u0921\u0942\u092C\u0940 \u0926\u094D\u0935\u093E\u0930\u0915\u093E','\u0936\u094D\u0930\u0926\u094D\u0927\u093E'], col:'t'},
  {id:'tapasya', x:185, y:230, type:'event', icon:'\uD83E\uDDD8', name:'\u092E\u0939\u093E\u0928 \u0924\u092A\u0938\u094D\u092F\u093E', dev:'\u092E\u0939\u093E\u0928 \u0924\u092A\u0938\u094D\u092F\u093E', era:'\u092D\u0915\u094D\u0924\u093F \u0915\u0947 \u0926\u0936\u0915', desc:'\u0926\u094D\u0935\u093E\u0930\u0915\u093E \u092A\u0939\u0941\u0901\u091A\u0928\u0947 \u0938\u0947 \u092A\u0939\u0932\u0947 \u0915\u093F\u0936\u0928\u0926\u093E\u0938 \u091C\u0940 \u0928\u0947 \u0926\u0936\u0915\u094B\u0902 \u0924\u0915 \u0917\u0939\u0928 \u0906\u0927\u094D\u092F\u093E\u0924\u094D\u092E\u093F\u0915 \u0924\u092A\u0938\u094D\u092F\u093E \u0915\u0940\u0964 \u090F\u0915\u093E\u0917\u094D\u0930 \u092D\u0915\u094D\u0924\u093F \u0915\u093E \u092F\u0939 \u0915\u093E\u0932 \u0909\u0928\u094D\u0939\u0947\u0902 \u0909\u0938 \u0926\u093F\u0935\u094D\u092F \u092D\u0947\u0902\u091F \u0915\u0947 \u0932\u093F\u090F \u0924\u0948\u092F\u093E\u0930 \u0915\u0930\u0924\u093E \u0930\u0939\u093E \u091C\u094B \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0947 \u092D\u093E\u0917\u094D\u092F \u0915\u094B \u092C\u0926\u0932\u0928\u0947 \u0935\u093E\u0932\u0940 \u0925\u0940\u0964', tags:['\u0924\u092A\u0938\u094D\u092F\u093E','\u0935\u0948\u0930\u093E\u0917\u094D\u092F','\u092D\u0915\u094D\u0924\u093F'], col:'t'},
  {id:'jeevandas', x:0, y:300, type:'key', icon:'\uD83D\uDC64', name:'\u091C\u0940\u0935\u0928\u0926\u093E\u0938', dev:'\u091C\u0940\u0935\u0928\u0926\u093E\u0938', era:'\u0938\u0902\u0935\u0924 \u0967\u096B\u0968\u096D \u00B7 \u2248 \u0967\u096A\u096D\u0966 \u0908.', desc:'\u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u0935\u0902\u0936 \u0915\u0947 \u090F\u0915 \u092A\u094D\u0930\u092E\u0941\u0916 \u0938\u0926\u0938\u094D\u092F\u0964 \u0938\u0902\u0935\u0924 \u0967\u096B\u0968\u096D \u092E\u0947\u0902 \u0909\u0928\u0915\u0940 \u092A\u0924\u094D\u0928\u0940 \u0938\u0941\u091C\u093E\u0928 \u0926\u0947\u0935\u0940 \u0928\u0947 \u0938\u0924\u0940 \u0939\u094B\u0928\u0947 \u0915\u093E \u0938\u0902\u0915\u0932\u094D\u092A \u0932\u093F\u092F\u093E \u2014 \u090F\u0915 \u0918\u091F\u0928\u093E \u0907\u0924\u0928\u0940 \u092E\u0939\u0924\u094D\u0924\u094D\u0935\u092A\u0942\u0930\u094D\u0923 \u0915\u093F \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0947 \u0939\u0938\u094D\u0924\u0932\u093F\u0916\u093F\u0924 \u0905\u092D\u093F\u0932\u0947\u0916\u094B\u0902 \u0914\u0930 \u092E\u094C\u0916\u093F\u0915 \u092A\u0930\u0902\u092A\u0930\u093E \u092E\u0947\u0902 \u096B\u0966\u0966 \u0935\u0930\u094D\u0937\u094B\u0902 \u0924\u0915 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0930\u0939\u0940\u0964', tags:['\u0935\u0902\u0936','\u0938\u0902\u0935\u0924 \u0967\u096B\u0968\u096D'], col:'s'},
  {id:'sujan', x:200, y:400, type:'key', icon:'\uD83C\uDF38', name:'\u0938\u0941\u091C\u093E\u0928 \u0926\u0947\u0935\u0940', dev:'\u0938\u0941\u091C\u093E\u0928 \u0926\u0947\u0935\u0940', era:'\u0938\u0902\u0935\u0924 \u0967\u096B\u0968\u096D \u00B7 \u0938\u0924\u0940', desc:'\u092A\u0942\u091C\u094D\u092F \u0938\u0941\u091C\u093E\u0928 \u0926\u0947\u0935\u0940 \u2014 \u091C\u0940\u0935\u0928\u0926\u093E\u0938 \u0915\u0940 \u092A\u0924\u094D\u0928\u0940 \u2014 \u091C\u093F\u0928\u094D\u0939\u094B\u0902\u0928\u0947 \u0938\u0902\u0935\u0924 \u0967\u096B\u0968\u096D (\u2248 \u0967\u096A\u096D\u0966 \u0908.) \u092E\u0947\u0902 \u0938\u0924\u0940 \u0939\u094B\u0928\u0947 \u0915\u093E \u0938\u0902\u0915\u0932\u094D\u092A \u0932\u093F\u092F\u093E\u0964 \u0909\u0928\u0915\u0940 \u0905\u0938\u093E\u0927\u093E\u0930\u0923 \u092D\u0915\u094D\u0924\u093F \u0907\u0924\u0928\u0940 \u092E\u0939\u0924\u094D\u0924\u094D\u0935\u092A\u0942\u0930\u094D\u0923 \u0925\u0940 \u0915\u093F \u092A\u093E\u0901\u091A \u0936\u0924\u093E\u092C\u094D\u0926\u093F\u092F\u094B\u0902 \u0924\u0915 \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0947 \u0905\u092D\u093F\u0932\u0947\u0916\u094B\u0902 \u092E\u0947\u0902 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0930\u0939\u0940\u0964', tags:['\u0938\u0924\u0940','\u092D\u0915\u094D\u0924\u093F','\u0938\u094D\u092E\u0930\u0923\u0940\u092F'], col:'s'},
  {id:'katyayani', x:-360, y:400, type:'deity', icon:'\uD83C\uDF38', name:'\u0915\u093E\u0924\u094D\u092F\u093E\u092F\u0928\u0940 \u0926\u0947\u0935\u0940', dev:'\u0915\u093E\u0924\u094D\u092F\u093E\u092F\u0928\u0940 \u0926\u0947\u0935\u0940', era:'\u0915\u0941\u0932 \u0926\u0947\u0935\u0940 \u00B7 \u092A\u094D\u0930\u092E\u0941\u0916', desc:'\u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0940 \u092A\u094D\u0930\u092E\u0941\u0916 \u0915\u0941\u0932 \u0926\u0947\u0935\u0940\u0964 \u0928\u0935\u0926\u0941\u0930\u094D\u0917\u093E \u0915\u093E \u091B\u0920\u093E \u0938\u094D\u0935\u0930\u0942\u092A \u2014 \u092F\u091C\u0941\u0930\u094D\u0935\u0947\u0926 \u0915\u0947 \u0924\u0948\u0924\u094D\u0924\u093F\u0930\u0940\u092F \u0906\u0930\u0923\u094D\u092F\u0915 \u092E\u0947\u0902 \u0938\u0930\u094D\u0935\u092A\u094D\u0930\u0925\u092E \u0909\u0932\u094D\u0932\u0947\u0916\u0964 \u092D\u093E\u0917\u0935\u0924 \u092A\u0941\u0930\u093E\u0923 \u092E\u0947\u0902 \u0935\u0930\u094D\u0923\u0928: \u0935\u0943\u0902\u0926\u093E\u0935\u0928 \u0915\u0940 \u0917\u094B\u092A\u093F\u092F\u094B\u0902 \u0928\u0947 \u0915\u0943\u0937\u094D\u0923 \u0915\u094B \u092A\u0924\u093F \u0930\u0942\u092A \u092E\u0947\u0902 \u092A\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u093E\u0924\u094D\u092F\u093E\u092F\u0928\u0940 \u0915\u0940 \u092A\u0942\u091C\u093E \u0915\u0940 \u2014 \u092F\u0939 \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0940 \u0926\u094D\u0935\u093E\u0930\u0915\u093E-\u0915\u0925\u093E \u0938\u0947 \u0917\u0939\u0930\u093E \u091C\u0941\u0921\u093C\u093E\u0935 \u0939\u0948\u0964', tags:['\u0915\u0941\u0932 \u0926\u0947\u0935\u0940','\u0928\u0935\u0926\u0941\u0930\u094D\u0917\u093E','\u092F\u091C\u0941\u0930\u094D\u0935\u0947\u0926'], col:'c'},
  {id:'vaishnavi', x:-185, y:520, type:'deity', icon:'\uD83E\uDEB7', name:'\u0935\u0948\u0937\u094D\u0923\u0935\u0940 \u0926\u0947\u0935\u0940', dev:'\u0935\u0948\u0937\u094D\u0923\u0935\u0940 \u0926\u0947\u0935\u0940', era:'\u0915\u0941\u0932 \u0926\u0947\u0935\u0940 \u00B7 \u0926\u094D\u0935\u093F\u0924\u0940\u092F', desc:'\u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0940 \u0926\u0942\u0938\u0930\u0940 \u0915\u0941\u0932 \u0926\u0947\u0935\u0940\u0964 \u092E\u093E\u0924\u0943\u0915\u093E\u0913\u0902 \u092E\u0947\u0902 \u0938\u0947 \u090F\u0915 \u2014 \u0938\u094D\u0935\u092F\u0902 \u092D\u0917\u0935\u093E\u0928 \u0935\u093F\u0937\u094D\u0923\u0941 \u0915\u0940 \u0936\u0915\u094D\u0924\u093F\u0964 \u0938\u0941\u0926\u0930\u094D\u0936\u0928 \u091A\u0915\u094D\u0930, \u0936\u0902\u0916, \u0917\u0926\u093E \u0914\u0930 \u0915\u092E\u0932 \u0927\u093E\u0930\u0923 \u0915\u0930\u0924\u0940 \u0939\u0948\u0902\u0964 \u0909\u0928\u0915\u0940 \u0909\u092A\u0938\u094D\u0925\u093F\u0924\u093F \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0940 \u092A\u0942\u0930\u094D\u0923 \u0935\u0948\u0937\u094D\u0923\u0935 \u092D\u0915\u094D\u0924\u093F \u0915\u094B \u092A\u094D\u0930\u0915\u091F \u0915\u0930\u0924\u0940 \u0939\u0948\u0964', tags:['\u0915\u0941\u0932 \u0926\u0947\u0935\u0940','\u092E\u093E\u0924\u0943\u0915\u093E','\u0935\u093F\u0937\u094D\u0923\u0941-\u0936\u0915\u094D\u0924\u093F'], col:'c'},
  {id:'raghunath', x:185, y:520, type:'deity', icon:'\uD83C\uDFF9', name:'\u0936\u094D\u0930\u0940 \u0930\u0918\u0941\u0928\u093E\u0925', dev:'\u0936\u094D\u0930\u0940 \u0930\u0918\u0941\u0928\u093E\u0925 \u092D\u0917\u0935\u093E\u0928', era:'\u0907\u0937\u094D\u091F \u0926\u0947\u0935\u0924\u093E', desc:'\u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0947 \u0907\u0937\u094D\u091F \u0926\u0947\u0935\u0924\u093E\u0964 \u0930\u0918\u0941\u0928\u093E\u0925 \u2014 \u0930\u0918\u0941 \u0915\u0941\u0932 \u0915\u0947 \u0938\u094D\u0935\u093E\u092E\u0940 \u2014 \u092D\u0917\u0935\u093E\u0928 \u0930\u093E\u092E \u0939\u0948\u0902, \u0935\u093F\u0937\u094D\u0923\u0941 \u0915\u0947 \u0938\u093E\u0924\u0935\u0947\u0902 \u0905\u0935\u0924\u093E\u0930\u0964 \u0930\u093E\u092E (\u0930\u0918\u0941\u0928\u093E\u0925 \u0915\u0947 \u0930\u0942\u092A \u092E\u0947\u0902) \u0914\u0930 \u0915\u0943\u0937\u094D\u0923 (\u0926\u094D\u0935\u093E\u0930\u0915\u093E \u092A\u094D\u0930\u0938\u0902\u0917) \u2014 \u0926\u094B\u0928\u094B\u0902 \u0915\u0947 \u092A\u094D\u0930\u0924\u093F \u092F\u0939 \u092D\u0915\u094D\u0924\u093F \u090F\u0915 \u092A\u0930\u093F\u092A\u0942\u0930\u094D\u0923 \u0935\u0948\u0937\u094D\u0923\u0935 \u0906\u0924\u094D\u092E\u093F\u0915 \u092A\u0930\u093F\u091A\u092F \u0939\u0948\u0964', tags:['\u0907\u0937\u094D\u091F \u0926\u0947\u0935\u0924\u093E','\u0930\u093E\u092E','\u0935\u0948\u0937\u094D\u0923\u0935','\u0938\u093E\u0924\u0935\u093E\u0901 \u0905\u0935\u0924\u093E\u0930'], col:'c'},
  {id:'donergarh', x:480, y:-60, type:'place', icon:'\uD83C\uDFF0', name:'\u0921\u094B\u0928\u0947\u0930\u0917\u0922\u093C', dev:'\u0921\u094B\u0928\u0947\u0930\u0917\u0922\u093C', era:'\u0909\u0926\u094D\u0917\u092E \u0938\u094D\u0925\u093E\u0928', desc:'\u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u093E \u0909\u0926\u094D\u0917\u092E \u0938\u094D\u0925\u093E\u0928 \u2014 \u091C\u0939\u093E\u0901 \u0921\u094B\u0928\u0947\u0930\u093F\u092F\u093E \u092C\u094D\u0930\u093E\u0939\u094D\u092E\u0923 \u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u092A\u0926\u0935\u0940 \u0927\u093E\u0930\u0923 \u0915\u0930\u0928\u0947 \u0938\u0947 \u092A\u0939\u0932\u0947 \u092C\u0938\u0947 \u0925\u0947\u0964', tags:['\u0909\u0926\u094D\u0917\u092E','\u0926\u0941\u0930\u094D\u0917','\u0921\u094B\u0928\u0947\u0930\u093F\u092F\u093E \u092C\u094D\u0930\u093E\u0939\u094D\u092E\u0923'], col:'b'},
  {id:'kishanpura', x:480, y:120, type:'place', icon:'\uD83C\uDF3F', name:'\u0915\u093F\u0936\u0928\u092A\u0941\u0930\u093E', dev:'\u0915\u093F\u0936\u0928\u092A\u0941\u0930\u093E', era:'\u092A\u0932\u093E\u092F\u0928 \u00B7 \u0915\u093F\u0936\u0928\u0926\u093E\u0938 \u091C\u0940 \u0915\u0947 \u0928\u093E\u092E \u092A\u0930', desc:'\u092A\u0932\u093E\u092F\u0928 \u092A\u0925 \u0915\u093E \u0926\u0942\u0938\u0930\u093E \u092A\u0921\u093C\u093E\u0935 \u2014 \u0938\u0940\u0927\u0947 \u0915\u093F\u0936\u0928\u0926\u093E\u0938 \u091C\u0940 \u0915\u0947 \u0938\u092E\u094D\u092E\u093E\u0928 \u092E\u0947\u0902 \u0928\u093E\u092E\u093F\u0924\u0964 \u092A\u0942\u0930\u094D\u0923 \u092A\u0932\u093E\u092F\u0928 \u0915\u094D\u0930\u092E: \u0921\u094B\u0928\u0947\u0930\u0917\u0922\u093C \u2192 \u0915\u093F\u0936\u0928\u092A\u0941\u0930\u093E \u2192 \u092C\u0926\u094B\u0916\u0930\u0964', tags:['\u092A\u0932\u093E\u092F\u0928','\u0915\u093F\u0936\u0928\u0926\u093E\u0938 \u091C\u0940 \u0915\u0947 \u0928\u093E\u092E \u092A\u0930'], col:'b'},
  {id:'badokhar', x:370, y:300, type:'place', icon:'\uD83C\uDFE1', name:'\u092C\u0926\u094B\u0916\u0930', dev:'\u092C\u0926\u094B\u0916\u0930', era:'\u092A\u0948\u0924\u0943\u0915 \u0917\u094D\u0930\u093E\u092E', desc:'\u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u0938\u092E\u093E\u091C \u0915\u093E \u0915\u0947\u0928\u094D\u0926\u094D\u0930\u0940\u092F \u092A\u0948\u0924\u0943\u0915 \u0917\u094D\u0930\u093E\u092E \u2014 \u0906\u0927\u094D\u092F\u093E\u0924\u094D\u092E\u093F\u0915 \u0914\u0930 \u0938\u093E\u0902\u0938\u094D\u0915\u0943\u0924\u093F\u0915 \u0906\u0927\u093E\u0930\u0938\u094D\u0924\u0902\u092D\u0964 \u092F\u0939\u093E\u0901 \u0938\u0947 \u0938\u092E\u093E\u091C \u0932\u0917\u092D\u0917 \u0968\u096E \u0917\u094D\u0930\u093E\u092E\u094B\u0902 \u092E\u0947\u0902 \u092B\u0948\u0932\u093E\u0964', tags:['\u092A\u0948\u0924\u0943\u0915 \u0917\u094D\u0930\u093E\u092E','\u0968\u096E \u0917\u093E\u0901\u0935','\u0915\u0947\u0928\u094D\u0926\u094D\u0930'], col:'b'},
  {id:'dwarka_p', x:-480, y:-120, type:'place', icon:'\uD83C\uDF0A', name:'\u0926\u094D\u0935\u093E\u0930\u0915\u093E', dev:'\u0926\u094D\u0935\u093E\u0930\u0915\u093E', era:'\u092A\u0935\u093F\u0924\u094D\u0930 \u0928\u0917\u0930\u0940 \u00B7 \u091A\u093E\u0930 \u0927\u093E\u092E', desc:'\u092D\u0917\u0935\u093E\u0928 \u0915\u0943\u0937\u094D\u0923 \u0915\u0940 \u0926\u093F\u0935\u094D\u092F \u0928\u0917\u0930\u0940 \u2014 \u201C\u0938\u094D\u0935\u0930\u094D\u0917 \u0915\u093E \u0926\u094D\u0935\u093E\u0930\u201D\u0964 \u0938\u092A\u094D\u0924 \u092A\u0941\u0930\u093F\u092F\u094B\u0902 \u0914\u0930 \u091A\u093E\u0930 \u0927\u093E\u092E\u094B\u0902 \u092E\u0947\u0902 \u0938\u0947 \u090F\u0915\u0964 \u0915\u0943\u0937\u094D\u0923 \u0915\u0947 \u091C\u093E\u0928\u0947 \u0915\u0947 \u092C\u093E\u0926 \u0905\u0930\u092C \u0938\u093E\u0917\u0930 \u092E\u0947\u0902 \u0921\u0942\u092C \u0917\u0908\u0964 \u0906\u0927\u0941\u0928\u093F\u0915 \u092A\u0941\u0930\u093E\u0924\u0924\u094D\u0935 (\u0967\u096F\u096E\u0969\u2013\u0967\u096F\u096F\u0966) \u0928\u0947 \u2248\u0967\u096B\u0966\u0966 \u0908\u0938\u093E \u092A\u0942\u0930\u094D\u0935 \u0915\u0940 \u0921\u0942\u092C\u0940 \u0938\u0902\u0930\u091A\u0928\u093E\u090F\u0901 \u092A\u094D\u0930\u092E\u093E\u0923\u093F\u0924 \u0915\u0940\u0902\u0964', tags:['\u091A\u093E\u0930 \u0927\u093E\u092E','\u0938\u092A\u094D\u0924 \u092A\u0941\u0930\u0940','\u0921\u0942\u092C\u0940 \u0928\u0917\u0930\u0940'], col:'b'},
  {id:'haridwar', x:-520, y:120, type:'place', icon:'\uD83C\uDFD4\uFE0F', name:'\u0939\u0930\u093F\u0926\u094D\u0935\u093E\u0930', dev:'\u0939\u0930\u093F\u0926\u094D\u0935\u093E\u0930', era:'\u0924\u0940\u0930\u094D\u0925 \u00B7 \u0915\u0941\u0902\u092D \u092E\u0947\u0932\u093E', desc:'\u0926\u0947\u0935\u0924\u093E\u0913\u0902 \u0915\u093E \u0926\u094D\u0935\u093E\u0930 \u2014 \u091C\u0939\u093E\u0901 \u0917\u0902\u0917\u093E \u0939\u093F\u092E\u093E\u0932\u092F \u0938\u0947 \u092E\u0948\u0926\u093E\u0928\u094B\u0902 \u092E\u0947\u0902 \u0909\u0924\u0930\u0924\u0940 \u0939\u0948\u0964 \u091A\u093E\u0930 \u0915\u0941\u0902\u092D-\u0928\u0917\u0930\u094B\u0902 \u092E\u0947\u0902 \u0938\u0947 \u090F\u0915\u0964 \u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0947 \u092A\u0935\u093F\u0924\u094D\u0930 \u092D\u0942\u0917\u094B\u0932 \u092E\u0947\u0902 \u090F\u0915 \u092A\u094D\u0930\u092E\u0941\u0916 \u0924\u0940\u0930\u094D\u0925\u0964', tags:['\u0915\u0941\u0902\u092D \u092E\u0947\u0932\u093E','\u0917\u0902\u0917\u093E','\u0924\u0940\u0930\u094D\u0925'], col:'b'},
  {id:'community', x:0, y:650, type:'key', icon:'\uD83C\uDFD8\uFE0F', name:'\u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u0938\u092E\u093E\u091C', dev:'\u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u0938\u092E\u093E\u091C', era:'\u0906\u091C \u00B7 \u0935\u0930\u094D\u0924\u092E\u093E\u0928', desc:'\u0906\u091C \u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E \u0938\u092E\u093E\u091C \u0932\u0917\u092D\u0917 \u0968\u096E \u0917\u094D\u0930\u093E\u092E\u094B\u0902 \u092E\u0947\u0902 \u092B\u0948\u0932\u093E \u0939\u0948 \u2014 \u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u0938\u0926\u0938\u094D\u092F \u0915\u0943\u0937\u094D\u0923-\u092A\u094D\u0930\u0926\u0924\u094D\u0924 \u092A\u0926\u0935\u0940 \u0915\u093E \u0935\u093E\u0939\u0915\u0964 \u092D\u0943\u0917\u0941 \u0917\u094B\u0924\u094D\u0930, \u092F\u091C\u0941\u0930\u094D\u0935\u0947\u0926 \u092E\u093E\u0927\u094D\u092F\u0902\u0926\u093F\u0928\u0940 \u0936\u093E\u0916\u093E, \u0915\u093E\u0924\u094D\u092F\u093E\u092F\u0928\u0940 \u0926\u0947\u0935\u0940, \u0935\u0948\u0937\u094D\u0923\u0935\u0940 \u0926\u0947\u0935\u0940 \u0914\u0930 \u0936\u094D\u0930\u0940 \u0930\u0918\u0941\u0928\u093E\u0925 \u092D\u0917\u0935\u093E\u0928 \u0915\u0947 \u092E\u093E\u0930\u094D\u0917\u0926\u0930\u094D\u0936\u0928 \u092E\u0947\u0902\u0964', tags:['\u0968\u096E \u0917\u093E\u0901\u0935','\u091C\u0940\u0935\u093F\u0924 \u0935\u093F\u0930\u093E\u0938\u0924','\u092D\u0943\u0917\u0941 \u0935\u0902\u0936'], col:'s'},
];

const EDGES = [
  {f:'brahma', t:'bhrigu', s:'divine', lbl:'\u0924\u094D\u0935\u0915\u094D \u0938\u0947 \u091C\u0928\u094D\u092E'},
  {f:'bhrigu', t:'lakshmi', s:'divine', lbl:'\u092A\u0941\u0924\u094D\u0930\u0940 \u092D\u093E\u0930\u094D\u0917\u0935\u0940'},
  {f:'bhrigu', t:'shukra', s:'divine', lbl:'\u092A\u0941\u0924\u094D\u0930'},
  {f:'bhrigu', t:'jamadagni', s:'divine', lbl:'\u0935\u0902\u0936\u091C'},
  {f:'jamadagni', t:'parashurama', s:'divine', lbl:'\u092A\u0941\u0924\u094D\u0930 \u00B7 \u0935\u093F\u0937\u094D\u0923\u0941 \u0905\u0935\u0924\u093E\u0930'},
  {f:'parashurama', t:'doneriya', s:'lineage', lbl:'\u092D\u0943\u0917\u0941 \u0935\u0902\u0936'},
  {f:'doneriya', t:'kishandas', s:'lineage', lbl:'\u0921\u094B\u0928\u0947\u0930\u093F\u092F\u093E \u092C\u094D\u0930\u093E\u0939\u094D\u092E\u0923'},
  {f:'krishna', t:'kishandas', s:'divine', lbl:'\u201C\u0906\u0913, \u0921\u093E\u0902\u0921\u094B\u0924\u093F\u092F\u093E\u201D'},
  {f:'kishandas', t:'ocean', s:'event', lbl:'\u0938\u093E\u0917\u0930 \u092A\u094D\u0930\u0935\u0947\u0936'},
  {f:'kishandas', t:'tapasya', s:'event', lbl:'\u0926\u0936\u0915\u094B\u0902 \u0915\u0940 \u0924\u092A\u0938\u094D\u092F\u093E'},
  {f:'kishandas', t:'jeevandas', s:'lineage', lbl:'\u0935\u0902\u0936 \u0915\u094D\u0930\u092E'},
  {f:'jeevandas', t:'sujan', s:'lineage', lbl:'\u092A\u0924\u094D\u0928\u0940 \u00B7 \u0938\u0924\u0940'},
  {f:'kishandas', t:'katyayani', s:'deity', lbl:'\u0915\u0941\u0932 \u0926\u0947\u0935\u0940'},
  {f:'kishandas', t:'vaishnavi', s:'deity', lbl:'\u0915\u0941\u0932 \u0926\u0947\u0935\u0940'},
  {f:'kishandas', t:'raghunath', s:'deity', lbl:'\u0907\u0937\u094D\u091F \u0926\u0947\u0935\u0924\u093E'},
  {f:'doneriya', t:'donergarh', s:'place', lbl:'\u0909\u0926\u094D\u0917\u092E \u0917\u094D\u0930\u093E\u092E'},
  {f:'kishandas', t:'kishanpura', s:'place', lbl:'\u0907\u0928\u0915\u0947 \u0928\u093E\u092E \u092A\u0930'},
  {f:'kishanpura', t:'badokhar', s:'place', lbl:'\u092A\u0932\u093E\u092F\u0928 \u092A\u0925'},
  {f:'kishandas', t:'dwarka_p', s:'place', lbl:'\u092A\u0935\u093F\u0924\u094D\u0930 \u092F\u093E\u0924\u094D\u0930\u093E'},
  {f:'kishandas', t:'haridwar', s:'place', lbl:'\u0924\u0940\u0930\u094D\u0925'},
  {f:'jeevandas', t:'community', s:'lineage', lbl:'\u0968\u096E \u0917\u093E\u0901\u0935\u094B\u0902 \u092E\u0947\u0902 \u0935\u093F\u0938\u094D\u0924\u093E\u0930'},
];

const ES = {
  divine: {c:'#C45C00', w:1.8, d:'none', o:.6},
  lineage:{c:'#7A3800', w:1.5, d:'none', o:.5},
  deity:  {c:'#8B1A1A', w:1, d:'4 3', o:.45},
  event:  {c:'#1A5C4A', w:1, d:'5 4', o:.4},
  place:  {c:'#1A3A6B', w:.9, d:'3 4', o:.35},
};

/* ───────── CANVAS MATH ───────── */
const DW = 1200;
const minYv = Math.min(...NODES.map(n => n.y));
const maxYv = Math.max(...NODES.map(n => n.y));
const spanY = maxYv - minYv + 240;
const OX = DW / 2;
const OY = 120 + (-minYv);
const DH = spanY;
const px = x => OX + x;
const py = y => OY + y;

/* ───────── COMPONENT ───────── */
export default function FamilyTree() {
  const treeWrapRef = useRef(null);
  const svgRef = useRef(null);
  const stageRef = useRef(null);
  const panelRef = useRef(null);
  const eraRef = useRef(null);
  const nameRef = useRef(null);
  const devRef = useRef(null);
  const descRef = useRef(null);
  const tagsRef = useRef(null);
  const zlblRef = useRef(null);

  /* refs for pan/zoom state */
  const stateRef = useRef({
    tSc: 1, tPX: 0, tPY: 0,
    tTargetSc: 1, tTargetPX: 0, tTargetPY: 0,
    rafId: 0, smoothing: false,
    dragging: false, dragSX: 0, dragSY: 0, dragPXs: 0, dragPYs: 0,
    pinchDist0: 0, pinchSc0: 1, pinchCX: 0, pinchCY: 0,
    touching: 0,
  });

  /* ── helpers exposed to JSX ── */
  function closePanel() {
    if (panelRef.current) panelRef.current.classList.remove('vis');
  }

  function zoomIn() {
    const s = stateRef.current;
    const wrap = treeWrapRef.current;
    if (!wrap) return;
    const cx = wrap.clientWidth / 2;
    const cy = wrap.clientHeight / 2;
    const f = 1.25;
    const ns = clampSc(s.tTargetSc * f);
    s.tTargetPX = cx - (cx - s.tTargetPX) * (ns / s.tTargetSc);
    s.tTargetPY = cy - (cy - s.tTargetPY) * (ns / s.tTargetSc);
    s.tTargetSc = ns;
    startSmooth();
  }

  function zoomOut() {
    const s = stateRef.current;
    const wrap = treeWrapRef.current;
    if (!wrap) return;
    const cx = wrap.clientWidth / 2;
    const cy = wrap.clientHeight / 2;
    const f = 1 / 1.25;
    const ns = clampSc(s.tTargetSc * f);
    s.tTargetPX = cx - (cx - s.tTargetPX) * (ns / s.tTargetSc);
    s.tTargetPY = cy - (cy - s.tTargetPY) * (ns / s.tTargetSc);
    s.tTargetSc = ns;
    startSmooth();
  }

  function fitAll() {
    const s = stateRef.current;
    const wrap = treeWrapRef.current;
    if (!wrap) return;
    const ww = wrap.clientWidth;
    const wh = wrap.clientHeight;
    const sc = Math.min(ww / DW, wh / DH) * 0.9;
    s.tTargetSc = clampSc(sc);
    s.tTargetPX = (ww - DW * s.tTargetSc) / 2;
    s.tTargetPY = (wh - DH * s.tTargetSc) / 2;
    startSmooth();
  }

  function resetView() {
    const s = stateRef.current;
    const wrap = treeWrapRef.current;
    if (!wrap) return;
    const ww = wrap.clientWidth;
    const wh = wrap.clientHeight;
    if (ww < 700) {
      const sc = Math.min(ww / DW, wh / DH) * 0.85;
      s.tTargetSc = clampSc(sc);
      s.tTargetPX = (ww - DW * s.tTargetSc) / 2;
      s.tTargetPY = (wh - DH * s.tTargetSc) / 2;
    } else {
      const sc = 1.05;
      const kishanCX = px(0);
      const kishanCY = py(60);
      s.tTargetSc = sc;
      s.tTargetPX = ww / 2 - kishanCX * sc;
      s.tTargetPY = wh / 2 - kishanCY * sc;
    }
    startSmooth();
  }

  function clampSc(v) { return Math.max(0.15, Math.min(3.5, v)); }

  function applyTT() {
    const s = stateRef.current;
    const stage = stageRef.current;
    const svg = svgRef.current;
    if (!stage || !svg) return;
    const t = `translate(${s.tPX}px,${s.tPY}px) scale(${s.tSc})`;
    stage.style.transform = t;
    svg.style.transform = t;
    if (zlblRef.current) zlblRef.current.textContent = Math.round(s.tSc * 100) + '%';
  }

  function startSmooth() {
    const s = stateRef.current;
    if (s.smoothing) return;
    s.smoothing = true;
    const ease = 0.07;
    function tick() {
      s.tSc += (s.tTargetSc - s.tSc) * ease;
      s.tPX += (s.tTargetPX - s.tPX) * ease;
      s.tPY += (s.tTargetPY - s.tPY) * ease;
      applyTT();
      if (
        Math.abs(s.tTargetSc - s.tSc) > 0.001 ||
        Math.abs(s.tTargetPX - s.tPX) > 0.5 ||
        Math.abs(s.tTargetPY - s.tPY) > 0.5
      ) {
        s.rafId = requestAnimationFrame(tick);
      } else {
        s.tSc = s.tTargetSc;
        s.tPX = s.tTargetPX;
        s.tPY = s.tTargetPY;
        applyTT();
        s.smoothing = false;
      }
    }
    s.rafId = requestAnimationFrame(tick);
  }

  /* ── main effect ── */
  useEffect(() => {
    const wrap = treeWrapRef.current;
    const stage = stageRef.current;
    const svg = svgRef.current;
    const panel = panelRef.current;
    if (!wrap || !stage || !svg || !panel) return;
    const s = stateRef.current;

    /* 1 — dimensions */
    stage.style.width = DW + 'px';
    stage.style.height = DH + 'px';
    svg.setAttribute('width', DW);
    svg.setAttribute('height', DH);

    /* 2 — build SVG edges */
    const svgNS = 'http://www.w3.org/2000/svg';
    svg.innerHTML = '';

    /* defs for markers */
    const defs = document.createElementNS(svgNS, 'defs');
    Object.keys(ES).forEach(k => {
      const st = ES[k];
      const marker = document.createElementNS(svgNS, 'marker');
      marker.setAttribute('id', 'ah-' + k);
      marker.setAttribute('markerWidth', '8');
      marker.setAttribute('markerHeight', '6');
      marker.setAttribute('refX', '7');
      marker.setAttribute('refY', '3');
      marker.setAttribute('orient', 'auto');
      const poly = document.createElementNS(svgNS, 'polygon');
      poly.setAttribute('points', '0 0, 8 3, 0 6');
      poly.setAttribute('fill', st.c);
      poly.setAttribute('opacity', String(st.o));
      marker.appendChild(poly);
      defs.appendChild(marker);
    });
    svg.appendChild(defs);

    const nodeMap = {};
    NODES.forEach(n => { nodeMap[n.id] = n; });

    EDGES.forEach(e => {
      const fn = nodeMap[e.f];
      const tn = nodeMap[e.t];
      if (!fn || !tn) return;
      const st = ES[e.s] || ES.lineage;

      const x1 = px(fn.x), y1 = py(fn.y);
      const x2 = px(tn.x), y2 = py(tn.y);
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2;

      /* bezier: vertical emphasis */
      const dx = Math.abs(x2 - x1);
      const dy = Math.abs(y2 - y1);
      let cpOff = Math.min(dx, dy) * 0.35;
      if (cpOff < 30) cpOff = 30;

      const cp1x = x1, cp1y = y1 + cpOff;
      const cp2x = x2, cp2y = y2 - cpOff;

      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', `M${x1},${y1} C${cp1x},${cp1y} ${cp2x},${cp2y} ${x2},${y2}`);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', st.c);
      path.setAttribute('stroke-width', String(st.w));
      path.setAttribute('opacity', String(st.o));
      if (st.d !== 'none') path.setAttribute('stroke-dasharray', st.d);
      path.setAttribute('marker-end', `url(#ah-${e.s})`);
      svg.appendChild(path);

      /* label */
      if (e.lbl) {
        const txt = document.createElementNS(svgNS, 'text');
        txt.setAttribute('x', String(mx));
        txt.setAttribute('y', String(my - 6));
        txt.setAttribute('text-anchor', 'middle');
        txt.setAttribute('font-size', '9');
        txt.setAttribute('font-family', 'var(--font-noto)');
        txt.setAttribute('fill', st.c);
        txt.setAttribute('opacity', String(Math.min(st.o + 0.15, 0.85)));
        txt.textContent = e.lbl;
        svg.appendChild(txt);
      }
    });

    /* 3 — create DOM nodes */
    stage.innerHTML = '';
    const sizes = {root: 110, key: 94, deity: 88, event: 82, place: 82};
    const borderColors = {root: 'var(--saffron)', key: 'var(--saffron)', deity: 'var(--crimson)', event: 'var(--teal)', place: 'var(--blue)'};

    NODES.forEach(nd => {
      const sz = sizes[nd.type] || 88;
      const half = sz / 2;
      const cx = px(nd.x);
      const cy = py(nd.y);

      const el = document.createElement('div');
      el.className = 't-node';
      el.style.cssText = `
        position:absolute;
        left:${cx - half}px;
        top:${cy - half}px;
        width:${sz}px;
        height:${sz}px;
        border-radius:${nd.type === 'place' ? '7px' : '50%'};
        border:2px solid ${borderColors[nd.type] || 'var(--saffron)'};
        ${nd.type === 'event' ? 'border-style:dashed;' : ''}
        background:linear-gradient(145deg, #FFFAF2, #F5EDD8);
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        text-align:center;
        font-family:var(--font-noto);
        box-shadow:0 2px 8px rgba(0,0,0,.08);
        transition:box-shadow .2s, transform .2s;
        z-index:2;
        overflow:hidden;
        padding:4px;
      `;

      /* icon */
      const iconEl = document.createElement('span');
      iconEl.style.cssText = `font-size:${sz > 100 ? 28 : sz > 90 ? 24 : 20}px;line-height:1;`;
      iconEl.textContent = nd.icon;
      el.appendChild(iconEl);

      /* name */
      const nameEl = document.createElement('span');
      nameEl.style.cssText = `font-size:${sz > 100 ? 10 : sz > 90 ? 9 : 8}px;line-height:1.15;margin-top:2px;color:var(--ink);font-weight:600;overflow:hidden;text-overflow:ellipsis;max-width:${sz - 10}px;white-space:nowrap;font-family:var(--font-noto);`;
      nameEl.textContent = nd.name;
      el.appendChild(nameEl);

      /* pulse ring for root nodes */
      if (nd.type === 'root') {
        const ring = document.createElement('div');
        ring.style.cssText = `
          position:absolute;
          top:-6px;left:-6px;right:-6px;bottom:-6px;
          border-radius:50%;
          border:1.5px solid var(--saffron);
          opacity:0;
          animation:pulse-ring 2.5s ease-out infinite;
          pointer-events:none;
        `;
        el.appendChild(ring);
      }

      /* hover */
      el.addEventListener('mouseenter', () => {
        el.style.boxShadow = '0 4px 16px rgba(196,92,0,.25)';
        el.style.transform = 'scale(1.08)';
      });
      el.addEventListener('mouseleave', () => {
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,.08)';
        el.style.transform = 'scale(1)';
      });

      /* click → panel */
      el.addEventListener('click', (ev) => {
        ev.stopPropagation();
        showPanel(nd, el);
      });

      stage.appendChild(el);
    });

    /* inject pulse keyframes if not present */
    if (!document.getElementById('pulse-ring-kf')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'pulse-ring-kf';
      styleEl.textContent = `@keyframes pulse-ring{0%{transform:scale(.95);opacity:.6}70%{transform:scale(1.15);opacity:0}100%{transform:scale(1.15);opacity:0}}`;
      document.head.appendChild(styleEl);
    }

    /* 5 — panel show */
    function showPanel(nd, el) {
      if (eraRef.current) {
        eraRef.current.textContent = nd.era || '';
        eraRef.current.className = 'tp-era ' + (nd.col || 's');
      }
      if (nameRef.current) nameRef.current.textContent = nd.name;
      if (devRef.current) devRef.current.textContent = nd.dev || '';
      if (descRef.current) descRef.current.textContent = nd.desc || '';
      if (tagsRef.current) {
        tagsRef.current.innerHTML = '';
        (nd.tags || []).forEach(t => {
          const sp = document.createElement('span');
          sp.className = 'tp-tag';
          sp.textContent = t;
          tagsRef.current.appendChild(sp);
        });
      }
      panel.classList.add('vis');
      // Position panel next to node on desktop
      const isMob = window.innerWidth <= 600;
      if (!isMob && el) {
        const wr = wrap.getBoundingClientRect();
        const nr = el.getBoundingClientRect();
        let lft = nr.right - wr.left + 14;
        let top = nr.top - wr.top - 16;
        if (nr.right + 305 > window.innerWidth) lft = nr.left - wr.left - 300;
        top = Math.max(10, Math.min(top, wrap.clientHeight - 320));
        panel.style.left = lft + 'px';
        panel.style.top = top + 'px';
        panel.style.width = '285px';
        panel.style.bottom = 'auto';
      } else {
        panel.style.bottom = '0';
        panel.style.left = '0';
        panel.style.right = '0';
        panel.style.top = 'auto';
      }
    }

    /* 6 — initial view */
    function setInitialView() {
      const ww = wrap.clientWidth;
      const wh = wrap.clientHeight;
      if (ww < 700) {
        // Mobile: fit all nodes with padding
        const sc = Math.min(ww / DW, wh / DH) * 0.85;
        s.tSc = clampSc(sc);
        s.tTargetSc = s.tSc;
        s.tPX = (ww - DW * s.tSc) / 2;
        s.tPY = (wh - DH * s.tSc) / 2;
      } else {
        // Desktop: center on Kishandas ji
        const initSc = 1.05;
        const kishanCX = px(0);
        const kishanCY = py(60);
        s.tSc = initSc;
        s.tTargetSc = initSc;
        s.tPX = ww / 2 - kishanCX * initSc;
        s.tPY = wh / 2 - kishanCY * initSc;
      }
      s.tTargetPX = s.tPX;
      s.tTargetPY = s.tPY;
      applyTT();
    }
    setInitialView();

    /* resize handler */
    function onResize() { setInitialView(); }
    window.addEventListener('resize', onResize);

    /* ── PAN / ZOOM EVENTS ── */

    /* mouse drag */
    function onMouseDown(ev) {
      if (ev.button !== 0) return;
      s.dragging = true;
      s.dragSX = ev.clientX;
      s.dragSY = ev.clientY;
      s.dragPXs = s.tTargetPX;
      s.dragPYs = s.tTargetPY;
      wrap.style.cursor = 'grabbing';
    }
    function onMouseMove(ev) {
      if (!s.dragging) return;
      const dx = ev.clientX - s.dragSX;
      const dy = ev.clientY - s.dragSY;
      s.tPX = s.dragPXs + dx;
      s.tPY = s.dragPYs + dy;
      s.tTargetPX = s.tPX;
      s.tTargetPY = s.tPY;
      applyTT();
    }
    function onMouseUp() {
      s.dragging = false;
      wrap.style.cursor = '';
    }

    /* wheel zoom with inertia */
    function onWheel(ev) {
      ev.preventDefault();
      const rect = wrap.getBoundingClientRect();
      const mx = ev.clientX - rect.left;
      const my = ev.clientY - rect.top;

      /* clamp deltaY to ±60 */
      const raw = Math.max(-60, Math.min(60, ev.deltaY));
      const factor = Math.exp(-raw * 0.0007);
      const ns = clampSc(s.tTargetSc * factor);

      s.tTargetPX = mx - (mx - s.tTargetPX) * (ns / s.tTargetSc);
      s.tTargetPY = my - (my - s.tTargetPY) * (ns / s.tTargetSc);
      s.tTargetSc = ns;
      startSmooth();
    }

    /* touch: 1-finger drag, 2-finger pinch */
    function onTouchStart(ev) {
      s.touching = ev.touches.length;
      if (ev.touches.length === 1) {
        s.dragging = true;
        s.dragSX = ev.touches[0].clientX;
        s.dragSY = ev.touches[0].clientY;
        s.dragPXs = s.tTargetPX;
        s.dragPYs = s.tTargetPY;
      } else if (ev.touches.length === 2) {
        s.dragging = false;
        const t0 = ev.touches[0];
        const t1 = ev.touches[1];
        s.pinchDist0 = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
        s.pinchSc0 = s.tTargetSc;
        const rect = wrap.getBoundingClientRect();
        s.pinchCX = (t0.clientX + t1.clientX) / 2 - rect.left;
        s.pinchCY = (t0.clientY + t1.clientY) / 2 - rect.top;
      }
    }
    function onTouchMove(ev) {
      ev.preventDefault();
      if (ev.touches.length === 1 && s.dragging) {
        const dx = ev.touches[0].clientX - s.dragSX;
        const dy = ev.touches[0].clientY - s.dragSY;
        s.tPX = s.dragPXs + dx;
        s.tPY = s.dragPYs + dy;
        s.tTargetPX = s.tPX;
        s.tTargetPY = s.tPY;
        applyTT();
      } else if (ev.touches.length === 2) {
        const t0 = ev.touches[0];
        const t1 = ev.touches[1];
        const dist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
        const ratio = dist / s.pinchDist0;
        const ns = clampSc(s.pinchSc0 * ratio);
        s.tTargetPX = s.pinchCX - (s.pinchCX - s.tTargetPX) * (ns / s.tTargetSc);
        s.tTargetPY = s.pinchCY - (s.pinchCY - s.tTargetPY) * (ns / s.tTargetSc);
        s.tTargetSc = ns;
        startSmooth();
      }
    }
    function onTouchEnd() {
      s.dragging = false;
      s.touching = 0;
    }

    /* close panel on background click */
    function onWrapClick(e) {
      if (!e.target.closest('.t-node') && !e.target.closest('#t-panel')) {
        panel.classList.remove('vis');
      }
    }

    /* attach listeners */
    wrap.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    wrap.addEventListener('wheel', onWheel, {passive: false});
    wrap.addEventListener('touchstart', onTouchStart, {passive: true});
    wrap.addEventListener('touchmove', onTouchMove, {passive: false});
    wrap.addEventListener('touchend', onTouchEnd);
    wrap.addEventListener('click', onWrapClick);

    /* cleanup */
    return () => {
      wrap.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      wrap.removeEventListener('wheel', onWheel);
      wrap.removeEventListener('touchstart', onTouchStart);
      wrap.removeEventListener('touchmove', onTouchMove);
      wrap.removeEventListener('touchend', onTouchEnd);
      wrap.removeEventListener('click', onWrapClick);
      window.removeEventListener('resize', onResize);
      if (s.rafId) cancelAnimationFrame(s.rafId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="tree-section" id="tree-section">
      <div className="tree-section-hdr">
        <div className="sec-hdr">
          <span className="sec-lbl" style={{fontFamily:'var(--font-noto)'}}>इंटरैक्टिव वंश वृक्ष</span>
          <h2 className="sec-ttl" style={{fontFamily:'var(--font-noto)'}}>दंडोतिया वंश वृक्ष</h2>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'6px',flexShrink:0}}>
          <span style={{fontFamily:'var(--font-noto)',fontSize:'10px',color:'var(--ink3)',opacity:'.6'}}>टैप करें · खींचें · चुटकी</span>
        </div>
      </div>
      <div className="tree-container" ref={treeWrapRef} id="treeWrap">
        <svg ref={svgRef} id="t-svg-l" style={{position:'absolute',top:0,left:0,pointerEvents:'none',overflow:'visible',transformOrigin:'0 0'}} />
        <div ref={stageRef} id="t-stage" style={{position:'absolute',transformOrigin:'0 0'}} />
        <div id="t-panel" ref={panelRef}>
          <button className="tp-close" onClick={closePanel}>{'\u00D7'}</button>
          <span className="tp-era" ref={eraRef} />
          <div className="tp-name" ref={nameRef} />
          <div className="tp-dev" ref={devRef} />
          <div className="tp-line" />
          <div className="tp-desc" ref={descRef} />
          <div className="tp-tags" ref={tagsRef} />
        </div>
        <div id="t-legend">
          <div className="t-leg"><div className="t-ld lg" /><span className="t-lt">पितामह</span></div>
          <div className="t-leg"><div className="t-ld" /><span className="t-lt">पूर्वज</span></div>
          <div className="t-leg"><div className="t-ld r" /><span className="t-lt">देवी/देवता</span></div>
          <div className="t-leg"><div className="t-ld t" /><span className="t-lt">घटना</span></div>
          <div className="t-leg"><div className="t-ld b" /><span className="t-lt">स्थान</span></div>
        </div>
      </div>
      <div className="tree-controls">
        <span className="tc-zlbl" ref={zlblRef}>62%</span>
        <button className="tc-btn" onClick={zoomIn}>＋ बड़ा</button>
        <button className="tc-btn" onClick={zoomOut}>－ छोटा</button>
        <button className="tc-btn sec" onClick={fitAll}>सब दिखाएँ</button>
        <button className="tc-btn sec" onClick={resetView}>रीसेट</button>
      </div>
      <div className="tree-hint" style={{fontFamily:'var(--font-noto)'}}>खींचें · चुटकी बजाएँ · नोड पर टैप करें</div>
    </section>
  );
}
