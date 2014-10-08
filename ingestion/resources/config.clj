{
  :mongo {
              :host "127.0.0.1"
              :database "ingestion"
              }
  :resources [ {
                  :location "https://spreadsheets.google.com/feeds/list/0AgT-U5vP_iLMdFBITF9ieE1UaGNHX0dvWlR1aThSV1E/od6/public/values?alt=json",
                  :name "distilleries"
                  :mapping { :name "gsx$distilleryname.$t", :state "gsx$state.$t" }
                }
;               {
;                  :location "https://spreadsheets.google.com/feeds/list/0AgT-U5vP_iLMdFBITF9ieE1UaGNHX0dvWlR1aThSV1E/od6/public/values?alt=json",
;                  :name "spirits"
;                  :mapping { :name "gsx$brandname.$t", :class "gsx$classofspirit.$t", :certification "gsx$certification.$t", :distillery { :name "gsx$distilleryname.$t", :state "gsx$state.$t" } }
;                 }

               ]
  }