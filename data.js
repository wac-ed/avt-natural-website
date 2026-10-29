/* Catalogue and shared content. Sources: Ingredient List 2026, Food Ingredients list, Primyra range, Personal care portal information. No process or solvent names, no customer names. */
window.AVT = window.AVT || {};
AVT.families = {
  marigold:{name:"Marigold Oleoresins",slug:"marigold-oleoresins",img:"img/marigold2.jpg",line:"Lutein and zeaxanthin from marigold we breed and grow with contract farmers in India.",
    story:"Marigold is 45 to 50 percent of what we make, and the one crop we follow from seed to extract. Our seed scientists breed for flowers with more active per bloom and more weight per acre, contract farmers grow them across several agro-climatic zones, and the flowers come straight to our own plant.",
    origin:"agro",originText:"Bred from our own parent seeds and grown by about 25,000 contract farmers.",chips:["Lutein","Zeaxanthin","Deodorised","Organic"],proof:["marigold-value-chain"],proofTitle:"From seed to extract."},
  spice:{name:"Spice Oleoresins",slug:"spice-oleoresins",img:"img/chilli.jpg",line:"The full spice range, customised to the colour, heat and regulation of your market.",
    story:"We supply the complete spice portfolio, and the story here is customisation. We meet strict contaminant limits for the EU and Korea, isolate the active a function needs, and tailor colour, pungency and format to each customer and country.",
    origin:"research",originText:"Customised in our Cochin lab: contaminant-free, colourless or deeper hue, by process.",chips:["Paprika","Capsicum","Turmeric","Pepper","Ginger","Cardamom","Nutmeg and mace","Cumin","Cinnamon"],proof:["colourless-capsicum","deep-hue-paprika"]},
  oils:{name:"Essential Oils",slug:"essential-oils",img:"img/oils.jpg",line:"One consolidated portfolio of spice and herb oils, steam distilled and standardised.",
    story:"Buyers expect to see the whole range in one place, so we consolidate essential oils across our own distillation and trusted sources, standardised to a marker compound and available as liquids or micro-encapsulated powders.",
    origin:"manufacturing",originText:"Steam distilled and standardised to a marker compound, batch after batch.",chips:["Oregano","Clove","Cinnamon","Pepper","Turmeric"]},
  extracts:{name:"Natural Extracts",slug:"natural-extracts",img:"img/teatasting.jpg",line:"Tea, coffee and botanical extracts, from instant tea to 99% natural caffeine.",
    story:"We are the world's largest tea decaffeinator, which makes us one of the largest suppliers of natural tea caffeine. Around tea sit coffee extracts, nutraceutical-grade botanicals and the botanical blends behind our Primyra animal nutrition range.",
    origin:"beverage",originText:"Tea know-how carried forward from the A.V. Thomas Group's plantation heritage.",chips:["Instant tea","Decaf","Green tea","Green coffee","Caffeine"]}
};
/* collections cut across families: listed first in the catalogue */
AVT.collections = {
  formulated:{name:"Formulated Products",kind:"Collection",img:"img/beadlets.jpg",line:"Ready-to-use blends built around a job: Primyra for animal nutrition and the NAX range for shelf life.",
    story:"Some customers want an ingredient, others want a solution. Our formulated products combine several botanicals at a set dose, so they work out of the bag: Primyra botanicals for gut health, performance and pigmentation, and NAX antioxidant blends for food shelf life.",
    origin:"research",originText:"Formulated and validated by our R&D and application teams.",chips:["Primyra","NAX","Beadlets","Ready to use"],
    test:function(p){return p.type==="Formulated";}},
  flavours:{name:"Flavour Solutions",kind:"Collection",img:"img/soup.jpg",line:"Natural flavours from fresh and roasted spices: flavour beads, absolutes, infused oils, liquid flavours, seasoning blends and value-added extracts.",
    story:"Our flavour range starts where our spice expertise does. Fresh and roasted spice flavours are carried as beads, absolutes, infused oils and liquid flavours, alongside ready seasoning blends and value-added extracts.",
    origin:"research",originText:"Developed and matched in our application lab before it scales.",chips:["Flavour beads","Absolutes","Infused oils","Liquid flavours","Seasoning blends","Value-added extracts"],
    test:function(p){return p.type==="Flavour";}},
  pigments:{name:"Pigments",kind:"Collection",img:"img/pig_yellow.jpg",line:"Natural marigold and paprika pigments for egg yolk and broiler skin colour, and the lutein behind them.",
    story:"Pigments are our biggest strength in animal nutrition. They start with marigold we breed and grow ourselves and paprika we know well, and end as standardised yellow and red pigments that hold up in real feed-mill conditions.",
    origin:"agro",originText:"Yellow pigments start with marigold bred from our own parent seeds.",chips:["Yellow","Red","Yolk colour","Skin colour"],
    test:function(p){return !!p.pigment||p.needs.indexOf("pigmentation")>-1;}}
};
AVT.allProducts = {name:"All products",title:"Every ingredient|we make.",kind:"The full catalogue",img:"img/field.jpg",line:"Browse by botanical, active, format or certification, or search for the molecule you need. Organic and conventional versions are listed separately.",
  story:"Every product here starts as a plant: marigold we breed and grow, spices, herbs and tea. We extract, standardise and formulate them in our own plants, so the catalogue is one supply chain seen from the end.",
  origin:"manufacturing",originText:"Extracted, standardised and tested in our own plants.",chips:["Formulated","Pigments","Oleoresins","Essential oils","Extracts"],proof:["marigold-value-chain","colourless-capsicum"],proofTitle:"What the process makes possible."};
AVT.industryNames = {food:"Food",bev:"Beverage",ahn:"Animal Health & Nutrition",pc:"Personal Care",hhn:"Human Health & Nutrition"};
/* p(id, family, name, botanical, key, format, industries, extra) */
AVT.products = [];
(function(){
  function p(id,fam,name,bot,key,fmt,ind,x){x=x||{};AVT.products.push(Object.assign({id:id,fam:fam,name:name,bot:bot,key:key,fmt:fmt,ind:ind,type:"Ingredient",org:false,needs:[],actives:[],apps:[]},x));}
  // marigold
  p("marigold-oleoresin","marigold","Marigold Oleoresin","Tagetes erecta","Lutein and zeaxanthin, standardised","Oleoresin",["ahn","food","hhn"],{actives:["lutein","zeaxanthin"],needs:["pigmentation","natural colour"],apps:["Feed pigmentation","Food colour","Eye health"],hero:true});
  p("organic-marigold-oleoresin","marigold","Organic Marigold Oleoresin","Tagetes erecta","Lutein, from certified organic flowers","Oleoresin",["ahn","food","hhn"],{org:true,actives:["lutein"],needs:["pigmentation","natural colour"],apps:["Organic feed","Organic food colour"]});
  p("deodorised-marigold-extract","marigold","Deodorised Marigold Extract","Tagetes erecta","Flower odour removed for food colour","Oleoresin",["food"],{actives:["lutein"],needs:["natural colour"],apps:["Food colour","Beverages"]});
  p("microencapsulated-marigold","marigold","Micro-encapsulated Marigold Oleoresin","Tagetes erecta","Lutein content, min. 5%","Micro-encapsulated",["food","hhn","ahn"],{actives:["lutein"],needs:["natural colour"],apps:["Dry mixes","Premixes"]});
  p("lutein-ester","marigold","Lutein Ester","Tagetes erecta","Commercialised 2023 from AVT R&D","Powder",["hhn"],{actives:["lutein"],apps:["Eye health supplements"]});
  p("primyra-y60","marigold","Primyra Y60","Tagetes erecta","Marigold-based yellow pigment for yolk and skin","Powder",["ahn"],{type:"Formulated",brand:"Primyra",actives:["lutein"],needs:["pigmentation"],apps:["Egg yolk colour","Broiler skin colour"],pigment:true});
  // spice
  p("paprika-oleoresin","spice","Paprika Oleoresin","Capsicum annuum","Colour value 40,000 to 180,000 CU","Oleoresin",["food","hhn"],{actives:["capsanthin"],needs:["natural colour"],apps:["Seasonings","Sauces","Meat products"],hero:true});
  p("paprika-deep-red","spice","Deeper Red-Hue Paprika Oleoresin","Capsicum annuum","Absorbance ratio of 1.0 or more","Oleoresin",["food"],{needs:["natural colour"],apps:["Seasonings","Snacks"],note:"Process derived and independent of raw material."});
  p("paprika-yellow","spice","Paprika Yellow Oleoresin","Capsicum annuum","A rare yellow hue from paprika","Oleoresin",["food"],{needs:["natural colour"],apps:["Bakery","Dairy","Snacks"]});
  p("paprika-stable","spice","Heat and Light Stable Paprika Oleoresin","Capsicum annuum","Stabilised with natural antioxidants","Oleoresin",["food"],{needs:["natural colour","shelf life"],apps:["Processed foods","Sauces"]});
  p("capsicum-oleoresin","spice","Capsicum Oleoresin","Capsicum frutescens","Capsaicinoids 6.6% to 40%","Oleoresin",["food","pc"],{actives:["capsaicin"],needs:["heat"],apps:["Seasonings","Sauces"]});
  p("capsicum-eu","spice","Contaminant-Free Capsicum Oleoresin","Capsicum frutescens","Mycotoxins and residues within EU limits","Oleoresin",["food"],{actives:["capsaicin"],needs:["heat","compliance"],apps:["EU and Korea exports"],note:"Contaminants removed through an in-house process."});
  p("colourless-capsicum","spice","Colourless Capsicum Oleoresin","Capsicum frutescens","0.5M to 1.5M SHU at under 5 CU","Oleoresin",["food","pc"],{actives:["capsaicin"],needs:["heat without colour","heat"],apps:["Noodle seasoning oils","Topical balms","Clear sauces"],hero:true,caseId:"colourless-capsicum"});
  p("turmeric-oleoresin","spice","Turmeric Oleoresin","Curcuma longa","Curcuminoids 8% to 30%","Oleoresin",["food","hhn"],{actives:["curcumin"],needs:["natural colour"],apps:["Curries","Dairy","Beverages"]});
  p("curcumin-powder","spice","Curcumin Powder","Curcuma longa","Curcuminoids, enriched to requirement","Powder",["hhn","food"],{actives:["curcumin"],apps:["Supplements","Colour"],note:"Made to suit customer and market requirements, with the option to enrich specific curcuminoids."});
  p("microencapsulated-turmeric","spice","Micro-encapsulated Turmeric Oleoresin","Curcuma longa","Curcuminoids, min. 10% or min. 8.5%","Micro-encapsulated",["food","bev","hhn"],{actives:["curcumin"],needs:["natural colour"],apps:["Natural food colouring","Nutraceuticals","Functional beverages","Capsules and tablets"],note:"Light to dark orange, free-flowing powder. Water dispersible."});
  p("ginger-oleoresin","spice","Ginger Oleoresin","Zingiber officinale","Gingerols 20% to 30%","Oleoresin",["food","bev","hhn"],{actives:["gingerol"],apps:["Beverages","Bakery"]});
  p("pepper-oleoresin","spice","Black Pepper Oleoresin","Piper nigrum","Free-flowing, decolourised or additive-free","Oleoresin",["food"],{actives:["piperine"],apps:["Seasonings","Meat products"]});
  p("microencapsulated-pepper","spice","Micro-encapsulated Black Pepper Oleoresin","Piper nigrum","Piperine 8.5% to 10%, volatile oil 3.5% to 5%","Micro-encapsulated",["food","bev","hhn"],{actives:["piperine"],apps:["Bakery","Beverages","Confectionery","Marinades","Meat, poultry and seafood","Sauces","Seasonings","Snacks","Soups"],note:"Pale green, free-flowing powder. Water dispersible."});
  p("microencapsulated-white-pepper","spice","Micro-encapsulated White Pepper Oleoresin","Piper nigrum","Piperine 8% to 10%","Micro-encapsulated",["food","bev"],{actives:["piperine"],apps:["Bakery","Beverages","Confectionery","Marinades","Meat, poultry and seafood","Sauces","Seasonings","Snacks","Soups"],note:"Light cream to pale yellowish-brown, free-flowing powder. Water dispersible."});
  p("microencapsulated-paprika","spice","Micro-encapsulated Paprika Oleoresin","Capsicum annuum","Colour value 7,000 to 9,000 CU, min. 15,000 CU, or 35,000 to 40,000 CU","Micro-encapsulated",["food"],{actives:["capsanthin"],needs:["natural colour"],apps:["Seasonings","Snacks","Sauces","Processed foods"],note:"Light to dark red, free-flowing powder. Water dispersible. Encapsulation protects the colour and flavour for better stability, controlled release and longer shelf life."});
  p("microencapsulated-ginger","spice","Micro-encapsulated Ginger Oleoresin","Zingiber officinale","Volatile oil 14% to 16%","Micro-encapsulated",["food","bev","hhn"],{actives:["gingerol"],apps:["Foods","Beverages","Nutraceuticals"],note:"Light to dark brown, free-flowing powder. Water dispersible. Turns sticky oleoresin into a free-flowing powder and masks its pungency for easy dosing."});
  p("microencapsulated-ginger-high-gingerols","spice","Micro-encapsulated Ginger Oleoresin, High Gingerols","Zingiber officinale","Gingerols, min. 5%","Micro-encapsulated",["food","bev","hhn"],{actives:["gingerol"],apps:["Nutraceuticals","Functional foods","Beverages"],note:"Light to dark brownish-yellow, free-flowing powder. Water dispersible. Intense pungency and flavour."});
  p("microencapsulated-garlic-fresh","spice","Micro-encapsulated Fresh Garlic","Allium sativum","Fresh garlic flavour","Micro-encapsulated",["food"],{apps:["Savoury products","Snacks","Meat and seafood","Bakery","Frozen and convenience foods"],note:"Light to dark yellowish-brown, free-flowing powder. Water soluble."});
  p("microencapsulated-onion-fresh","spice","Micro-encapsulated Fresh Onion","Allium cepa","Fresh onion flavour","Micro-encapsulated",["food"],{apps:["Instant foods","Snack seasonings","Spice blends","Processed foods"],note:"Light yellowish-brown to dark brown, free-flowing powder. Water soluble."});
  p("microencapsulated-cardamom","spice","Micro-encapsulated Cardamom Oleoresin","Elettaria cardamomum","Volatile oil (v/w), min. 7%","Micro-encapsulated",["food","bev"],{apps:["Beverages","Bakery","Confectionery","Dairy"],note:"Off-white, free-flowing powder. Water dispersible. Protects the volatile oils for stability, controlled release and longer shelf life with authentic cardamom flavour."});
  p("garlic-encapsulated-powder","spice","Garlic Encapsulated Powder","Allium sativum","Volatile oil 8% to 10%","Micro-encapsulated",["food"],{apps:["Savoury products","Snacks","Meat and seafood","Bakery","Frozen and convenience foods"],note:"Off-white, free-flowing powder. Water dispersible."});
  p("aged-garlic-extract","extracts","Aged Garlic Extract","Allium sativum","Alliin, 0.5%","Powder",["hhn","food","bev"],{apps:["Nutraceuticals","Functional foods and beverages","Herbal products"],note:"Off-white to pale yellow, free-flowing powder. Water soluble."});
  p("fenugreek-oleoresin","spice","Fenugreek Oleoresin","Trigonella foenum-graecum","Saponin, min. 30%","Oleoresin",["food","ahn"],{actives:["saponin"],apps:["Seasonings","Feed"]});
  p("cardamom-oleoresin","spice","Cardamom Oleoresin","Elettaria cardamomum","Full aromatic profile","Oleoresin",["food","bev"],{apps:["Beverages","Bakery","Dairy"]});
  p("nutmeg-oleoresin","spice","Nutmeg Oleoresin","Myristica fragrans","Specification on request","Oleoresin",["food"],{apps:["Seasonings","Bakery","Processed foods"]});
  p("mace-oleoresin","spice","Mace Oleoresin","Myristica fragrans","Specification on request","Oleoresin",["food"],{apps:["Seasonings","Bakery","Processed foods"]});
  p("cumin-oleoresin","spice","Cumin Oleoresin","Cuminum cyminum","Specification on request","Oleoresin",["food"],{apps:["Seasonings","Bakery","Processed foods"]});
  p("cinnamon-cassia-oleoresin","spice","Cinnamon / Cassia Oleoresin","Cinnamomum cassia","Specification on request","Oleoresin",["food"],{apps:["Seasonings","Bakery","Processed foods"]});
  p("garlic-oleoresin","spice","Garlic Oleoresin","Allium sativum","Fresh and roasted profiles","Oleoresin",["food"],{apps:["Seasonings","Snacks"]});
  p("organic-chilli-oleoresin","spice","Organic Chilli Oleoresin","Capsicum annuum","From certified organic chilli","Oleoresin",["food"],{org:true,actives:["capsaicin"],needs:["heat"],apps:["Organic seasonings"]});
  p("primyra-r10","spice","Primyra R10","Capsicum annuum","Paprika-based red pigment, carotenoids min. 10 g/kg","Powder",["ahn"],{type:"Formulated",brand:"Primyra",needs:["pigmentation"],apps:["Egg yolk colour","Broiler colour"],pigment:true});
  // essential oils
  p("oregano-oil","oils","Oregano Oil","Origanum vulgare","Carvacrol, min. 70%","Liquid",["ahn","food"],{actives:["carvacrol"],apps:["Feed additives","Seasonings"]});
  p("organic-oregano-or20","oils","AVT OR 20 Organic Oregano","Origanum vulgare","Volatile organic oregano oil, min. 18%","Powder",["ahn"],{org:true,actives:["carvacrol"],apps:["Organic feed"]});
  p("cinnamon-bark-oil","oils","Cinnamon Bark Oil","Cinnamomum verum","Cinnamaldehyde, min. 70%","Liquid",["food","ahn"],{actives:["cinnamaldehyde"],apps:["Bakery","Feed additives"]});
  p("clove-leaf-oil","oils","Clove Leaf Oil","Syzygium aromaticum","Eugenol, min. 70%","Liquid",["food","pc"],{actives:["eugenol"],apps:["Seasonings","Oral care"]});
  p("garlic-oil","oils","Garlic Oil","Allium sativum","Diallyl disulfide, min. 50%","Liquid",["food","ahn"],{apps:["Seasonings","Feed"]});
  p("peppermint-oil","oils","Peppermint Oil","Mentha piperita","Menthol, min. 40%","Liquid",["food","pc"],{actives:["menthol"],apps:["Confectionery","Personal care"]});
  p("aniseed-oil","oils","Aniseed Oil","Pimpinella anisum","Anethole, min. 95%","Liquid",["food","ahn"],{actives:["anethole"],apps:["Beverages","Feed palatability"]});
  p("turmeric-oil","oils","Turmeric Oil","Curcuma longa","Turmerone, min. 40%","Liquid",["pc","food"],{actives:["turmerone"],needs:["anti-acne","dandruff"],apps:["Skin care","Hair care"]});
  p("black-pepper-oil","oils","Black Pepper Oil","Piper nigrum","Steam distilled","Liquid",["food","pc"],{apps:["Seasonings","Fragrance"]});
  p("clove-bud-oil","oils","Clove Bud Oil","Syzygium aromaticum","Specification on request","Liquid",["food","bev"],{apps:["Flavours","Seasonings","Beverages"]});
  p("ginger-oil","oils","Ginger Oil","Zingiber officinale","Specification on request","Liquid",["food","bev"],{apps:["Flavours","Seasonings","Beverages"]});
  p("nutmeg-oil","oils","Nutmeg Oil","Myristica fragrans","Specification on request","Liquid",["food","bev"],{apps:["Flavours","Seasonings","Beverages"]});
  p("mace-oil","oils","Mace Oil","Myristica fragrans","Specification on request","Liquid",["food","bev"],{apps:["Flavours","Seasonings","Beverages"]});
  p("lemongrass-oil","oils","Lemongrass Oil","Cymbopogon flexuosus","Specification on request","Liquid",["food","bev"],{apps:["Flavours","Seasonings","Beverages"]});
  p("cardamom-oil","oils","Cardamom Oil","Elettaria cardamomum","Specification on request","Liquid",["food","bev"],{apps:["Flavours","Seasonings","Beverages"]});
  p("ajwain-oil","oils","AVT Ajwain Oil","Trachyspermum ammi","INCI: Trachyspermum ammi Oil","Liquid",["pc"],{needs:["anti-acne","dandruff"],apps:["Anti-acne","Anti-dandruff"]});
  p("black-cumin-oil","oils","AVT Black Cumin Total Extract Oil","Nigella sativa","INCI: Nigella sativa Seed Oil","Liquid",["pc"],{needs:["moisturisation","anti-acne","dandruff"],apps:["Moisturisation","Anti-dandruff"]});
  p("microencapsulated-clove","oils","Micro-encapsulated Clove Oil","Syzygium aromaticum","Volatile oil min. 18%, eugenol min. 10%","Micro-encapsulated",["ahn","food"],{actives:["eugenol"],apps:["Feed premixes"]});
  p("microencapsulated-cinnamon","oils","Micro-encapsulated Cinnamon Oil","Cinnamomum","Volatile oil min. 18%, cinnamaldehyde min. 10%","Micro-encapsulated",["ahn","food"],{actives:["cinnamaldehyde"],apps:["Feed premixes"]});
  // extracts
  p("instant-black-tea-hws","extracts","Instant Black Tea, Hot Water Soluble","Camellia sinensis","Custom liquor colour and flavour","Powder",["bev"],{needs:["natural colour"],apps:["Hot beverages","Vending"],hero:true});
  p("instant-black-tea-cws","extracts","Instant Black Tea, Cold Water Soluble","Camellia sinensis","Acid stable, no sedimentation","Powder",["bev"],{apps:["RTD tea","Iced tea"]});
  p("instant-green-tea","extracts","Instant Green Tea","Camellia sinensis","Hot and cold water soluble","Powder",["bev"],{apps:["RTD tea","Functional drinks"]});
  p("decaffeinated-tea","extracts","Decaffeinated Black and Green Tea","Camellia sinensis","Solvent-free decaffeination","Powder",["bev"],{needs:["decaffeination"],apps:["Decaf beverages"]});
  p("natural-tea-caffeine","extracts","Natural Tea Caffeine","Camellia sinensis","Caffeine, min. 99%","Powder",["bev","hhn","pc"],{actives:["caffeine"],apps:["Energy drinks","Supplements","Eye care"]});
  p("green-tea-extract","extracts","Green Tea Extract","Camellia sinensis","Polyphenols, min. 90%","Powder",["hhn","food","pc"],{actives:["egcg","polyphenols"],needs:["shelf life","anti-ageing"],apps:["Supplements","Antioxidant","Skin care"]});
  p("high-egcg-green-tea","extracts","High EGCG Green Tea Extract","Camellia sinensis","EGCG above 60%","Powder",["hhn","pc"],{actives:["egcg"],needs:["anti-ageing","anti-acne","sebum control"],apps:["Nutraceuticals","Skin care"]});
  p("theaflavin-extract","extracts","High Theaflavin Black Tea Extract","Camellia sinensis","Theaflavin-rich, nutraceutical grade","Powder",["hhn"],{actives:["theaflavin"],apps:["Nutraceuticals"]});
  p("tea-concentrates","extracts","Tea Liquid Concentrates","Camellia sinensis","Black and green tea concentrates","Liquid",["bev"],{apps:["RTD","Food service"]});
  p("green-coffee-extract","extracts","Green Coffee Extract","Coffea robusta","Chlorogenic acid, min. 70%","Powder",["hhn","pc"],{actives:["chlorogenic acid"],apps:["Weight management","Skin care"]});
  p("pomegranate-extract","extracts","Pomegranate Extract","Punica granatum","Polyphenols, min. 40%","Powder",["hhn"],{actives:["polyphenols"],apps:["Nutraceuticals"]});
  p("amla-extract","extracts","Amla Extract","Phyllanthus emblica","Polyphenols, min. 40%","Powder",["hhn"],{actives:["polyphenols"],apps:["Nutraceuticals"]});
  p("rosemary-extract","extracts","Rosemary Extract","Salvia rosmarinus","Natural antioxidant","Powder or liquid",["food"],{needs:["shelf life"],apps:["Meat","Frying oils","Snacks"]});
  p("fresh-ginger-beads","spice","Fresh Ginger Beads","Zingiber officinale","Fresh ginger flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("ginger-oil-beads","oils","Ginger Oil Beads","Zingiber officinale","Ginger oil flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("turmeric-beads","spice","Turmeric Beads","Curcuma longa","Fresh turmeric flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("capsicum-beads","spice","Capsicum Beads","Capsicum annuum","Fresh capsicum flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("black-pepper-beads","spice","Black Pepper Beads","Piper nigrum","Fresh black pepper flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("green-chilli-beads","spice","Green Chilli Beads","Capsicum annuum","Fresh green chilli flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("lemongrass-oil-beads","oils","Lemongrass Oil Beads","Cymbopogon flexuosus","Lemongrass oil flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("cassia-beads","spice","Cassia Beads","Cinnamomum cassia","Fresh cassia flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("fresh-cumin-beads","spice","Fresh Cumin Beads","Cuminum cyminum","Fresh cumin flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("roasted-cumin-beads","spice","Roasted Cumin Beads","Cuminum cyminum","Roasted cumin flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("fresh-coriander-beads","spice","Fresh Coriander Beads","Coriandrum sativum","Fresh coriander flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("roasted-coriander-beads","spice","Roasted Coriander Beads","Coriandrum sativum","Roasted coriander flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("fennel-beads","spice","Fennel Beads","Foeniculum vulgare","Fresh fennel flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("celery-beads","spice","Celery Beads","Apium graveolens","Fresh celery flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("clove-beads","spice","Clove Beads","Syzygium aromaticum","Fresh clove flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("roasted-garlic-beads","spice","Roasted Garlic Beads","Allium sativum","Roasted garlic flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("fresh-garlic-beads","spice","Fresh Garlic Beads","Allium sativum","Fresh garlic flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("green-onion-beads","spice","Green Onion Beads","Allium fistulosum","Fresh green onion flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("roasted-onion-beads","spice","Roasted Onion Beads","Allium cepa","Roasted onion flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("fried-shallot-beads","spice","Fried Shallot Beads","Allium cepa var. aggregatum","Roasted shallot flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("cardamom-beads","spice","Cardamom Beads","Elettaria cardamomum","Fresh cardamom flavour in bead form","Beads",["food"],{type:"Flavour",apps:["Seasonings","Snacks","Ready meals"]});
  p("nax-001","extracts","NAX 001","Rosemary and green tea","Shelf life for meat and meat analogues","Powder",["food"],{type:"Formulated",needs:["shelf life"],apps:["Meat","Meat analogues"]});
  p("nax-002","extracts","NAX 002","Rosemary and green tea","Shelf life for frying oils and snacks","Liquid",["food"],{type:"Formulated",needs:["shelf life"],apps:["Frying oils","Snack bars","Snacks"]});
  p("nax-003","extracts","NAX 003","Rosemary and green tea","Shelf life for instant mixes and high-fat premixes","Powder",["food"],{type:"Formulated",needs:["shelf life"],apps:["Instant mixes","High-fat premixes"]});
  p("fenugreek-saponins","extracts","AVT SAP18 Fenugreek Saponins","Trigonella foenum-graecum","Saponin, min. 18%","Powder",["ahn","hhn","pc"],{actives:["saponin"],apps:["Feed","Natural saponins"]});
  p("ashwagandha-extract","extracts","AVT Ashwagandha Extract","Withania somnifera","INCI: Withania somnifera Root Extract","Powder",["pc","hhn"],{needs:["moisturisation","even skin tone"],apps:["Adaptogen skin care"]});
  p("qg90","extracts","AVT QG 90","Tagetes erecta","Quercetagetin, upcycled from marigold","Powder",["pc"],{actives:["quercetagetin"],needs:["even skin tone","anti-acne","anti-ageing","moisturisation","sebum control"],apps:["Brightening","Anti-ageing","Anti-acne"],hero:true});
  p("chlorogenic-acid","extracts","AVT Chlorogenic Acid","Coffea robusta","Antioxidant for skin and hair","Powder",["pc"],{actives:["chlorogenic acid"],needs:["anti-ageing","hair fall"],apps:["Anti-ageing","Hair care"]});
  p("ursolic-acid","extracts","AVT Ursolic Acid","Botanical","Anti-inflammatory, anti-ageing","Powder",["pc"],{needs:["anti-ageing"],apps:["Skin care"]});
  p("natural-caffeine-coffee","extracts","AVT Natural Caffeine from Coffee","Coffea","Eye de-puffing and hair care","Powder",["pc"],{actives:["caffeine"],needs:["anti-ageing","hair fall"],apps:["Eye care","Hair care"]});
  p("primyra-max","extracts","Primyra Max","Cinnamon, oregano, tamarind","Growth and performance, 100 ppm","Beadlet",["ahn"],{type:"Formulated",brand:"Primyra",needs:["growth and performance"],apps:["Broilers","Breeders","Layers","Swine"]});
  p("primyra-gi","extracts","Primyra GI","Tea, cinnamon, pomegranate","Gut health, 100 ppm","Beadlet",["ahn"],{type:"Formulated",brand:"Primyra",needs:["gut health"],apps:["Broilers","Breeders","Layers","Swine"]});
  p("primyra-layer","extracts","Primyra Layer+","Ginger, rosemary, fenugreek, cinnamon","Layer performance, 100 ppm","Beadlet",["ahn"],{type:"Formulated",brand:"Primyra",needs:["layer performance"],apps:["Layers","Breeders"]});
  p("primyra-redox","extracts","Primyra Redox","Ginger, rosemary, bergamot","Liver and oxidative balance, 100 ppm","Beadlet",["ahn"],{type:"Formulated",brand:"Primyra",needs:["liver health"],apps:["Poultry","Swine","Fish and shrimp"]});
})();
AVT.primyra = {
  "primyra-max":{pos:"Production performance, gut integrity, carcass yield and meat quality.",comp:"Blend of cinnamon, oregano and tamarind in a fat carrier.",moa:"Supports host-mediated responses linked with gut integrity and lower inflammation.",inc:"Poultry 100 ppm · Swine 100 ppm",ben:["Improves performance","Enhances feed efficiency","Increases carcass yield","Improves gut integrity and muscle mass"],fit:["Broilers","Breeders","Layers","Swine"]},
  "primyra-gi":{pos:"Holistic gut solution for poultry and swine, to improve disease resistance and prevent performance loss.",comp:"Proprietary blend with tea, cinnamon and pomegranate extracts in a fat carrier.",moa:"Supports host-mediated gut health responses and helps reduce inflammation, disease susceptibility and spread of infection.",inc:"Poultry 100 ppm · Swine 100 ppm",ben:["Improves gut health","Improves feed efficiency","Minimises spread of infection","Improves performance"],fit:["Broilers","Breeders","Layers","Swine"]},
  "primyra-layer":{pos:"Layer performance support for egg production, egg quality and flock uniformity.",comp:"Blend of ginger, rosemary, fenugreek and cinnamon extracts and oils in a fat carrier.",moa:"Relieves stress, protects the gut from inflammation and supports ovarian health in laying hens.",inc:"Layers and breeders 100 ppm",ben:["Increases egg production","Improves egg quality","Maintains flock uniformity","Relieves stress"],fit:["Layers","Breeders"]},
  "primyra-redox":{pos:"For use where oxidative stress and liver pressure affect productivity.",comp:"Blend of ginger, rosemary and bergamot extract in a fat carrier.",moa:"Supports liver health and helps reduce oxidative stress and associated performance losses.",inc:"Poultry 100 ppm · Swine 100 ppm · Fish and shrimp 100 ppm",ben:["Improves liver health","Reduces oxidative stress","Improves feed efficiency","Reduces mortality"],fit:["Poultry","Swine","Aquaculture"]}
};
AVT.cases = {
  "marigold-value-chain":{title:"The marigold value chain",tag:"Flagship · Agro",img:"img/marigold2.jpg",ind:"ahn",
    sum:"From seed research to deodorised extract, one accountable chain for consistent lutein.",
    challenge:"Buyers of marigold-based lutein for feed pigmentation and food colour faced the same challenge every season: flower quality and volume swung with weather and with whoever was selling. Active content per flower was unpredictable, and nobody could trace a batch back to a field.",
    did:["Our seed scientists bred marigold from AVT's own parent seeds for more active per flower, more flower weight per acre, resilience and a plant shape that is easy to harvest. Each line is developed three to four years ahead of the season.","We contract farmers directly, with no agents. A field team of agronomists, extension officers and field assistants guides each farmer through the season with a package of practices.","Growing is spread across multiple agro-climatic zones, so one bad season in one region does not stop supply.","Flowers come from the farm gate to our own plant, where continuous extraction keeps heat contact low and deodorisation removes the flower odour for food colour use."],
    result:[["Customer","Consistent lutein quality season after season, traceable to the growing programme, in conventional, organic and deodorised variants."],["Farmer","A crop bred for their kg per acre, season-long guidance and a buyer who returns every year. Farmers come back because the economics work for them too."]],
    products:["marigold-oleoresin","organic-marigold-oleoresin","deodorised-marigold-extract","primyra-y60"],
    stats:[["3–4 yrs","Seed lines bred ahead of each season"],["0","Agents between AVT and its farmers"],["3","Variants: conventional, organic, deodorised"]],
    stages:["Seed","Farmer","Zones","Plant"],
    model:"The same model can be replicated for other botanicals, and partners can own a value chain with AVT from the growing stage."},
  "colourless-capsicum":{title:"Colourless capsicum oleoresin",tag:"Innovation · Food",img:"img/capsicum.jpg",ind:"food",
    sum:"Full pungency with virtually no colour, for products where heat must stay invisible.",
    challenge:"Capsicum oleoresin brings heat, but it also brings red. For clear seasoning oils, light-coloured sauces and topical balms, that colour was a challenge, and buyers had to choose between pungency and appearance.",
    did:["Our R&D team developed a process that keeps the capsaicinoids and removes the colour, independent of the raw material lot.","The oleoresin is also produced to contaminant limits that meet EU and Korean requirements."],
    result:[["Pungency","0.5 million to 1.5 million SHU"],["Colour","Under 5 colour units"],["Used in","Instant noodle seasoning oil sachets, clear sauces and topical balms"]],
    products:["colourless-capsicum","capsicum-eu","capsicum-oleoresin"],
    stats:[["<5 CU","Colour, virtually invisible"],["1.5M SHU","Pungency, at the top of the range"],["EU · Korea","Contaminant limits met"]],
    stages:["Develop","Comply"]},
  "deep-hue-paprika":{title:"Deeper red-hue paprika",tag:"Process · Food",img:"img/paprika.jpg",ind:"food",
    sum:"A deeper red delivered by process, not by hunting for the right raw material.",
    challenge:"The hue a paprika oleoresin gives a finished product depends heavily on the crop, so a deeper red usually meant paying for scarce raw material and accepting variation between lots.",
    did:["We developed a process that lifts the absorbance ratio of paprika oleoresin to 1.0 or more, giving a deeper red hue in the end product.","The same process thinking produced a rare paprika yellow and a heat and light stable paprika stabilised with natural antioxidants."],
    result:[["Hue","Absorbance ratio of 1.0 or more"],["Consistency","Process derived and independent of raw material"]],
    products:["paprika-deep-red","paprika-yellow","paprika-stable","paprika-oleoresin"],
    stats:[["≥1.0","Absorbance ratio for a deeper red"],["3","New paprika lines from one process"],["0","Dependence on scarce raw material"]],
    stages:["Process","Extend"]},
  "natural-decaffeination":{title:"Decaffeinated tea, the natural way",tag:"Legacy · Beverage",img:"img/teahills2.jpg",ind:"beverage",
    sum:"Caffeine out, character in, with a solvent-free process and a natural caffeine stream from the same leaf.",
    challenge:"Beverage brands wanted decaffeinated black and green tea that still tasted like tea, made without solvents, and they wanted it at scale and consistent from lot to lot.",
    did:["Building on AVT's plantation heritage, we developed a solvent-free decaffeination process that protects the liquor colour and flavour of the leaf.","The caffeine taken out of the tea is purified into natural tea caffeine at 99% or more, so nothing from the leaf is wasted.","The same tea know-how grew into high-active extracts and instant tea, with blending of origins and flexible order sizes for each brand."],
    result:[["Brand","Decaffeinated black and green tea that keeps its cup character, made without solvents."],["Scale","AVT is the world's largest tea decaffeinator, with a natural caffeine co-product for energy and personal care formulations."]],
    products:["decaffeinated-tea","natural-tea-caffeine","instant-black-tea-hws","high-egcg-green-tea"],
    stats:[["2004","First decaffeinated black tea"],["99%+","Natural tea caffeine purity"],["2013","Instant tea added to the range"]],
    stages:["Decaffeinate","Recover","Extend"]},
  "qg90-skin":{title:"QG 90 for skin",tag:"Clinical · Personal care",img:"img/leaf.jpg",ind:"pc",
    sum:"A natural active backed by four studies, from sebum control to anti-ageing.",
    challenge:"Personal care formulators want natural actives they can make claims on. Without study data, a botanical stays a story on the label rather than a benefit in the formula.",
    did:["We developed QG 90, a standardised natural active for skin, from our own extraction and enrichment.","We put it through four studies covering sebum control, dry and itchy skin, even skin tone and anti-ageing.","The active carries an INCI name and is supplied with the documentation formulators need for claims and certification."],
    result:[["Formulator","Four study-backed benefit areas from one natural active, ready for claims work."],["Consumer","Visible skin benefits from a plant-based ingredient."]],
    products:["qg90","high-egcg-green-tea","green-coffee-extract"],
    stats:[["4","Studies completed"],["4","Benefit areas: sebum, itch, tone, ageing"],["1","Natural active behind them all"]],
    stages:["Develop","Study","Document"]}
};
AVT.pages = [
  ["home","Home","Page",""],["solutions","Solutions","Page","Industries and needs"],["food-and-beverage","Food and Beverage","Industry","Food Solutions and Beverage Solutions"],
  ["food-solutions","Food Solutions","Industry","Spice extracts for food and seasoning"],["beverage-solutions","Beverage Solutions","Industry","Tea as a functional ingredient"],
  ["flavour-solutions","Flavour Solutions","Range","Flavour beads, absolutes, infused oils, liquid flavours, blends, extracts"],["antioxidants","Antioxidants","Range","Shelf life, rosemary, NAX 001 to 003"],["colours","Colours","Range","Natural colours, coming soon"],
  ["animal-health-nutrition","Animal Health & Nutrition","Industry","Primyra, pigments, gut health"],["personal-care","Personal Care","Industry","Upcycled natural actives"],
  ["products","Products","Catalogue","All ingredients"],["products.formulated","Formulated Products","Collection","Primyra and NAX blends"],["products.flavours","Flavour Solutions","Collection","Flavour beads and natural flavours"],["products.pigments","Pigments","Collection","Yellow and red pigments for yolk and skin"],["capabilities","Capabilities","Story","From seed to solution"],["agro","AVT Agro and Agro R&D","Capability","Seed science and contract farming"],
  ["research","R&D and Innovation","Capability","Full-spectrum extracts, Cochin lab"],["manufacturing","Manufacturing and Extraction","Capability","Continuous extraction, three plants"],
  ["quality","Quality and Certifications","Capability","FSSC 22000, FAMI-QS, ISO"],["case-studies","Customised Portfolio","Proof","What we made possible"],
  ["sustainability","Sustainability","Page","People, planet, product"],["community","Community","Page","CSR programmes"],["about","About AVT","Page","A.V. Thomas Group heritage"],
  ["careers","Careers","Page","Life at AVT"],["contact","Contact Us","Page","Talk to an expert"],["investors","Investor Relations","Page","Results, governance"]
];
AVT.syn = {
  "lutein":"marigold","zeaxanthin":"marigold","xanthophyll":"marigold","yolk":"primyra-y60","egg":"primyra-y60","pigment":"animal-health-nutrition","poultry":"animal-health-nutrition","swine":"animal-health-nutrition","feed":"animal-health-nutrition",
  "decolourised":"colourless-capsicum","decolorized":"colourless-capsicum","colourless":"colourless-capsicum","colorless":"colourless-capsicum","capsaicin":"capsicum","chili":"capsicum","chilli":"capsicum","shu":"capsicum",
  "curcumin":"turmeric","egcg":"green tea","catechin":"green tea","polyphenol":"green tea","chlorogenic":"coffee","frying":"antioxidants","rancid":"antioxidants","shelf":"antioxidants","oxidation":"antioxidants",
  "dandruff":"personal-care","acne":"personal-care","sebum":"personal-care","skin":"personal-care","decaf":"decaffeinated","caffeine":"caffeine","gut":"primyra-gi","or":"oleoresin"
};
