import { Common } from './segment.common';
import * as app from 'tns-core-modules/application';
let javautilMap = java.util.Map;
declare var com: any;
export class Segment extends Common {

    static apiKey: string = "";
    static context: android.content.Context;

    static init(apiKey: string) {
        Segment.apiKey = apiKey;
        Segment.context = app.android.context;
        console.log("COUCOU ON PASSE LA");
        console.log(com.segment.analytics.android.integrations.firebase.FirebaseIntegration.FACTORY);
        let analytics: com.segment.analytics.Analytics = new com.segment.analytics.Analytics.Builder(this.context, apiKey).trackApplicationLifecycleEvents().use(com.segment.analytics.android.integrations.firebase.FirebaseIntegration.FACTORY).recordScreenViews().build();
        com.segment.analytics.Analytics.setSingletonInstance(analytics);
    }

    static track() {
        console.log("ON TRACK");
        com.segment.analytics.Analytics.with(Segment.context).track("Application Started");
        let prop = new com.segment.analytics.Properties();
        prop.putValue("version", "0.0.1");
        prop.putValue("message", "Test");
        com.segment.analytics.Analytics.with(Segment.context).track("Event Test", prop);
    }
}
