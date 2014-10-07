{
  :mongo {
              :host "127.0.0.1"
              :database "ingestion"
              }
  :resources [ {
                  :location "https://spreadsheets.google.com/feeds/list/0AgT-U5vP_iLMdFBITF9ieE1UaGNHX0dvWlR1aThSV1E/od6/public/values?alt=json",
                  :name "distilleries"
                  :mapping { :name "feed.entry.gsx$distilleryname", :state "feed.entry.gsx$state" }
                },
               {
                  :location "https://spreadsheets.google.com/feeds/list/0AgT-U5vP_iLMdFBITF9ieE1UaGNHX0dvWlR1aThSV1E/od6/public/values?alt=json",
                  :name "spirits"
                  :mapping { :name "feed.entry.gsx$brandname", :class "feed.entry.gsx$classofspirit", :certification "feed.entry.gsx$certification", :distillery { :name "feed.entry.gsx$distilleryname", :state "feed.entry.gsx$state" } }
                 }

               ]
  }