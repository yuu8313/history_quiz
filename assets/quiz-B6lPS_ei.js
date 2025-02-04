const n = [
	{
		question: "ナイル川流域に発達した古代文明。太陽暦がつくられ、測量技術も発達していた。",
		hint: "この文明は、アフリカ大陸北東部の大河沿いに栄えました。毎年の自然現象が農業に大きな影響を与え、その予測が重要でした。また、巨大な建造物が特徴的で、その建設には高度な技術が必要でした。",
		answers: ["エジプト文明|エジプト|エジプト古代文明"],
		explanation: "ナイル川の氾濫を利用し、農業や暦法、測量技術が発達した古代文明です。"
	},
	{
		question: "古代に中国の黄河流域に起こった殷で占いに使用された漢字の元になったとされる文字 ",
		hint: "古代に中国の黄河流域に起こった殷で占いに使用された漢字の元になったとされる文字",
		answers: ["甲骨文字|こうこつもじ"],
		explanation: "甲骨文字は、紀元前1600年頃から1050年頃の間に中国の黄河中流域で使用されていました。この文字は、亀の甲羅や動物の肩胛骨に刻まれており、王が政治や軍事の決定を行う際に神意を問うための占いに使用されていました"
	},
	{
		question: "古代インドにおいて、仏教を開いた人物。 ",
		hint: "この人物は、北インドの出身で、紀元前6世紀頃に活躍しました。彼は王子として生まれましたが、苦行の末に悟りを開きました。彼の教えは、中道や四諦、八正道などの概念を含んでいます。",
		answers: ["釈迦|ガウタマ・シッダールタ|ゴータマ・シッダッタ|瞿曇悉達多|シャカ"],
		explanation: "釈迦は仏教の開祖で、北インドで生まれ、悟りを開いて教えを広めました"
	},
	{
		question: "中国の春秋・戦国時代に儒教の教えを始めて説いた人物。",
		hint: "この人物は、魯国出身の思想家で、春秋時代末期に活躍しました。彼の教えは、後に「論語」として編纂され、東アジアの文化に大きな影響を与えました。",
		answers: ["孔子|孔丘|仲尼"],
		explanation: "孔子は春秋時代末期の魯国の思想家で、儒教の始祖とされています"
	},
	{
		question: "東西交流の交通路の中で、唐の時代に重要な役割を果たした陸路。",
		hint: "この陸路は、中央アジアを通り、東西の文明を結ぶ重要な交易ルートでした。絹織物の輸送で有名になりました。唐代には、この道路沿いに駅伝制度が整備され、商人たちの往来が活発になりました。",
		answers: ["シルクロード|絹の道"],
		explanation: "唐代に整備された東西交流の重要な陸路です。中央アジアを通り、交易や文化交流の役割を果たしました。"
	},
	{
		question: "大陸から稲作が伝わったころ使用された,うすくて飾りの少ない実用向きの土器。",
		hint: "縄文時代の後に続く時代に登場した土器で、米作りの始まりと密接に関連しています。この土器は、それ以前の土器と比べて、より実用的な特徴を持っています。",
		answers: ["弥生土器|弥生式土器"],
		explanation: "弥生時代に登場し、稲作の伝来と共に使用された実用的な土器です"
	},
	{
		question: "3世紀ごろ,中国の魏に使いを送った邪馬台国の女王。",
		hint: "この人物は、東アジアの大国と外交関係を築いた古代日本の統治者です。",
		answers: ["卑弥呼|ヒミコ"],
		explanation: "卑弥呼は3世紀の邪馬台国の女王で、239年に魏に朝貢し、「親魏倭王」の称号を受けました"
	},
	{
		question: "古墳の周り途上に置かれていた,円筒形や,人物・家などをかたどった土製品",
		hint: "古代の祭祀に使われた、粘土で作られた小さな模型のようなものです。多くは古墳時代に作られ、墓の周りに並べられていました。形は様々で、人や動物、建物、道具などを模しています。",
		answers: ["埴輪|はにわ|ハニワ"],
		explanation: "埴輪は古墳時代の祭祀用土製品で、古墳の周囲に並べられました。円筒形や人物、家などの形があります。"
	},
	{
		question: "前方後円墳が作られた時代,大陸から日本に移り住み,土器づくり,土木・建築,織物などの技術を伝えた人々。",
		hint: "古墳時代、日本列島外から新しい知識や技術がもたらされました。特に、大陸の先進的な文化が日本に大きな影響を与えました。彼らは鉄器の製造や高度な土木技術を持っており、日本の文化や技術の発展に大きく貢献したとされています。",
		answers: ["渡来人|帰化人"],
		explanation: "大陸から日本に移住し、高度な技術を伝えた人々を指します。日本の古代文化形成に大きな影響を与えました。"
	},
	{
		question: "6世紀に,仏像や経典を日本に伝えた朝鮮半島の国。",
		hint: "朝鮮半島の南西部に位置し、日本との交流が盛んだった国です。この国は、中国の文化を取り入れ、高度な文明を築いていました。",
		answers: ["百済|くだら|ペクチェ"],
		explanation: "百済は6世紀に仏教を日本に伝えた重要な国です。百済は538年または552年に、聖明王の時代に日本へ仏教を公伝しました"
	},
	{
		question: "5~6世紀ごろ大利期から伝来し,仏教とともに日本人の考え方などに大きな影響を与えた教え",
		hint: "この教えは、東アジアの文化圏で広く影響を与えた思想体系で、人間関係や社会秩序に関する教えを含んでいます。朝鮮半島を経由して日本に伝わったとされています。",
		answers: ["儒学|儒教"],
		explanation: "儒学は5~6世紀頃に渡来人によって日本に伝来し、仏教と共に日本の思想に大きな影響を与えました"
	},
	{
		question: "聖徳太子が定めた制度で,氏や姓にとらわれず,才能や手柄の応じて豪族を役人に登用した。",
		hint: "この制度は、色で区別された12の階級を持ち、能力主義に基づいた人材登用システムでした。当時の日本社会に革新をもたらし、後の時代にも大きな影響を与えました。",
		answers: ["冠位十二階|かんいじゅうにかい"],
		explanation: "聖徳太子が推古12年(604年)に制定した官位制度です。能力主義による人材登用を目指しました。"
	},
	{
		question: "聖徳太子が定めた決まりで,仏教や儒教の考え方を取り入れ,役人の心構えを示したもの。",
		hint: "この決まりは、6世紀末から7世紀初頭にかけて制定されました。当時の日本は、大陸からの文化や思想を積極的に取り入れていた時期でした。この決まりは、17の条文から成り立っており、その中には「和」を重んじることや、君主と臣下の関係性について述べられています。",
		answers: ["十七条憲法|十七条の憲法"],
		explanation: "聖徳太子が604年に制定した日本最初の成文法です。仏教と儒教の思想を融合し、役人の心得を示しています。"
	},
	{
		question: "7世紀の初め,中国に使わされた小野妹子らの使節。",
		hint: "東アジアの大国との外交関係を築くため、日本から派遣された使節団です。当時の中国は南北統一を果たし、強大な中央集権国家となっていました。使節団の目的は、この国との正式な交流を開始することでした。",
		answers: ["遣隋使|けんずいし"],
		explanation: "遣隋使は7世紀初頭、日本から隋へ派遣された外交使節団です。小野妹子が代表的な人物として知られています"
	},
	{
		question: "聖徳太子が建てたとされる寺で,現存する最古の木造建築。",
		hint: "奈良県の斑鳩地域にある世界遺産に登録された寺院で、聖徳太子ゆかりの七大寺の一つです。この寺院は、聖徳太子の時代から1400年以上の歴史を持ち、独特の伽藍配置で知られています。",
		answers: ["法隆寺|ほうりゅうじ"],
		explanation: "法隆寺は聖徳太子建立七大寺の一つで、593年に建立されました。現存する世界最古の木造建築群として知られています。"
	},
	{
		question: "公地・公民の方針が打ち出された,中大兄皇子らによる政治の改革。",
		hint: "7世紀半ばに起こった、日本の古代国家形成に重要な役割を果たした出来事です。蘇我氏の打倒後、中国の制度を参考にした新しい政治体制の確立を目指しました。",
		answers: ["大化の改新|たいかのかいしん"],
		explanation: "645年に中大兄皇子らが主導した政治改革。公地公民制や班田収授法などを導入した"
	},
	{
		question: "天智天皇の没後,天皇の位をめぐって起こった争い。天武天皇はこの争いに勝って即位した",
		hint: "この争いは、7世紀後半に起こった古代日本最大の内乱です。近江の朝廷と吉野を拠点とした勢力が対立しました。争いの年号は十干十二支の一つで、動物の名前が含まれています。",
		answers: ["壬申の乱|じんしんのらん"],
		explanation: "672年に起こった皇位継承を巡る内乱。大友皇子と大海人皇子が対立し、大海人皇子が勝利して天武天皇となった。"
	},
	{
		question: "律令の制度による戸籍に基づいて,6歳以上のすべての男女に口分田を与えることなどを定めた法。",
		hint: "この制度は、土地の分配と人口管理に関連しています。農業生産と税収の基盤となる重要な政策で、6世紀から8世紀にかけて実施されました。中国の制度を参考にしていますが、日本の実情に合わせて調整されています。",
		answers: ["班田収授法|班田制"],
		explanation: "律令制下で実施された土地制度で、6歳以上の男女に口分田を与えた。"
	},
	{
		question: "701年,唐の法律にならってつくられた日本の法律。",
		hint: "遣唐使が持ち帰った法制度が、日本の律令制度の基礎となりました。中国文化の影響を強く受けた、古代日本の重要な法典です。",
		answers: ["大宝律令|大宝の律令"],
		explanation: "大宝律令は701年（年号：大宝）に制定された日本初の体系的な法典です。唐の律令を参考に作られ、律6巻と令11巻から成り立っています。"
	},
	{
		question: "律令制において,北九州の守りについた人々",
		hint: "白村江の戦いの後、大陸からの侵攻に備えて設置された制度です。東国出身の兵士が多く、3年交代で任務に就きました。",
		answers: ["防人|さきもり"],
		explanation: "防人は663年の白村江の戦い後、九州北部の防衛のため設置された兵士制度です。"
	},
	{
		question: "律令制において,6歳以上の人々に支給された田。",
		hint: "この制度は、古代日本の農業政策の根幹をなすものでした。6年ごとに行われ、人々の年齢や性別に応じて田地が分配されました。唐の制度を参考にしたとされています。",
		answers: ["口分田|くぶんでん"],
		explanation: "口分田は律令制下で6歳以上の人々に支給された田地です。男女で支給量が異なり、6年ごとに再分配されました"
	},
	{
		question: "8世紀のはじめ,唐の長安を手本として作られた都",
		hint: "この都は、日本の古代史において重要な役割を果たしました。奈良盆地に位置し、中国の影響を強く受けた都市計画が特徴です。遣唐使の派遣と関連があり、仏教文化の発展にも大きく寄与しました。",
		answers: ["平城京|平城"],
		explanation: "710年に造営された平城京は、唐の長安を2分の1の規模で模倣しました"
	},
	{
		question: "朝廷が口分田の不足を補うために,新しく開墾した土地の永久私有を認めた法律",
		hint: "この法律は、奈良時代に制定されました。当時の農民の土地所有に関する制度の変遷を考えてみましょう。また、この法律の前に、3世代に渡って土地所有を認めた法律がありました。",
		answers: ["墾田永年私財法"],
		explanation: "743年に口分田不足解消のため、聖武天皇が制定した法律です。　また三世一身法というものもありました。"
	},
	{
		question: "奈良時代,口分田の面積に応じて納めさせた税",
		hint: "この税は、農民が収穫したものの一部を納める制度でした。当時の農民の生活に大きな影響を与え、山上憶良の歌にも描かれています。",
		answers: ["租|そ"],
		explanation: "租は奈良時代に口分田の収穫の約3%を納める税でした。庸は、都での労働や、その代わりとなる布や米を納める税でした。調は、地方の特産品や布を都に納める税でした。"
	},
	{
		question: "国ごとに国分寺を、都には東大寺を立てた天皇。",
		hint: "8世紀の日本で、仏教を国家の守護者として重視した天皇です。奈良時代に、全国規模で仏教寺院の建立を命じました。この天皇の時代に、世界最大級の金銅仏が造られました。",
		answers: ["聖武天皇"],
		explanation: "聖武天皇は741年に国分寺建立の詔を発し、仏教で国を守ろうとしました。"
	},
	{
		question: "東大寺を立てた天皇のころを中心に栄えた文化",
		hint: "この文化は、中国の唐から多くの影響を受けました。遣唐使が持ち帰った異国の文化と日本の伝統が融合し、貴族を中心に華やかな芸術や文学が発展しました。また、仏教の影響も強く、大規模な寺院の建立が行われました。",
		answers: ["天平文化|天平の文化|天平"],
		explanation: "聖武天皇の時代に栄えた天平文化は、仏教と唐の影響を受けた優雅な貴族文化です。東大寺の建立もこの文化の象徴的な出来事でした。"
	},
	{
		question: "インドや西アジアなどから伝わった宝物が収められていた,東大寺にある建物",
		hint: "奈良時代の文化を象徴する建造物で、シルクロードの終着点とも呼ばれています。東大寺の北北西に位置し、高床式の独特な構造を持っています。",
		answers: ["正倉院|しょうそういん"],
		explanation: "聖武天皇の時代に栄えた天平文化は、仏教と唐の影響を受けた優雅な貴族文化です。東大寺の建立もこの文化の象徴的な出来事でした。"
	},
	{
		question: "奈良時代に幾度も遭難し,盲目になりながらも日本に渡ってきた中国の僧",
		hint: "揚州の大明寺の住職で、日本の僧侶から戒律を伝えるよう懇請された人物です。6回目の航海でようやく日本に到着しましたが、その過程で両目を失明しました。",
		answers: ["鑑真|がんじん"],
		explanation: "鑑真は奈良時代に中国から来日し、戒律を伝えた僧侶です。12年間で5回の渡航失敗を経験しました。"
	},
	{
		question: "7世紀から10世紀にかけて朝鮮半島を統一した国。",
		hint: "この国は、朝鮮半島の南東部に位置し、仏教を国教として採用しました。三国時代の終わりに、唐と同盟を結び、半島の統一を果たしました。",
		answers: ["新羅|シラギ|シンラ"],
		explanation: "新羅は7世紀後半に朝鮮半島を統一し、935年まで約260年間統治しました"
	},
	{
		question: "墾田永年私財法が出されてから広がり始めた私有地。",
		hint: "奈良時代に制定された法律により、新たに開墾した土地の私有が認められました。これにより、有力者たちが積極的に土地開発を行い、独自の管理体制を持つ私有地が広がりました。",
		answers: ["荘園"],
		explanation: "墾田永年私財法により、貴族や寺社が開発した私有地が荘園となりました。"
	},
	{
		question: "平安時代の初めに唐にわたって仏教を学び,帰国後,高野山金剛峰寺を建て,真言宗を広めた人物",
		hint: "この仏教僧は四国出身, 唐への留学経験がある, 高野山と深い関わりがある, 書道にも秀でていた",
		answers: ["空海|弘法大師"],
		explanation: "平安時代初期に真言密教を日本に広め、高野山金剛峰寺を開いた重要な僧侶です。"
	},
	{
		question: "空海や最長が中国にわたって仏教を学んだ頃の中国の王朝名",
		hint: "この王朝は、シルクロードを通じて西方から新しい文化や宗教を積極的に取り入れた時代でした。首都の長安は国際都市として栄え、多くの外国人が訪れていました。",
		answers: ["唐|とう"],
		explanation: "空海と最澄が渡った中国の王朝は唐でした。618年から907年まで続いた大帝国です"
	},
	{
		question: "日本の風土や生活に合った文かが最も栄えたころ,藤原氏の一族によって行われていた政治",
		hint: "平安時代の政治体制で、天皇の外戚が実権を握っていました。この時代には、和歌や物語文学が発展し、日本独自の文化（国風文化）が花開きました。",
		answers: ["摂関政治|せっかんせいじ"],
		explanation: "藤原氏が摂政・関白を独占し、天皇を凌ぐ権力で政治を行った体制です"
	},
	{
		question: "かな文字の普及により,貴族の生活や感情を細やかに描いた紫式部の長編小説",
		hint: "54帖からなり、光源氏の生涯を中心に描かれています。",
		answers: ["源氏物語"],
		explanation: "平安時代、かな文字の普及により、紫式部は『源氏物語』で貴族の感情を細やかに描くことができました。"
	},
	{
		question: "平安時代の後半,岩手県平泉町の中尊寺金色堂を建てるなど,東北地方で勢力を誇っていた一族",
		hint: "東北地方の豪族として知られ、仏教文化を大いに発展させました。平泉を中心に、浄土思想に基づいた建築や庭園を多数造営しました。彼らの名字は、日本の有力氏族の一つと同じです。",
		answers: ["奥州藤原氏|奥州藤原"],
		explanation: "奥州藤原氏は平安時代後期から鎌倉時代初期にかけて東北地方を支配した豪族です。奥州藤原氏は、清衡、基衡、秀衡、泰衡の4代にわたり、平泉を拠点に東北地方で強大な勢力を誇りました"
	},
	{
		question: "11世紀に始まった,上皇による政治",
		hint: "藤原氏の力が弱まり、天皇家が政治の実権を取り戻そうとした時代です。上皇の住居に関連した名称が付けられています。",
		answers: ["院政|いんせい"],
		explanation: "11世紀後半、白河天皇が始めた上皇による政治形態です。上皇が政治の実権を握り、約100年間続きました。この時期、寺社への荘園寄進が増加し、僧兵による強訴も行われるようになりました。"
	},
	{
		question: "1167年,武士出身として初めて太政大臣になった人物",
		hint: "この人物は、平安時代末期に勢力を拡大した武家の出身で、保元の乱と平治の乱で活躍しました。日宋貿易を開始し、経済的基盤を築いたことでも知られています",
		answers: ["平清盛"],
		explanation: "平清盛は1167年に武士として初めて太政大臣に就任しました。"
	},
	{
		question: "領地をなかだちとして,主従の間が御恩と奉公の関係で成り立った制度",
		hint: "鎌倉時代に始まったこの制度は、武士社会の基盤となりました。将軍と家臣の関係を土地を介して結びつけ、お互いの義務と権利を定めました。",
		answers: ["封建制度|封建制|封建"],
		explanation: "主君が家臣に領地を与え、家臣が主君に忠誠を誓う相互関係を表す制度"
	},
	{
		question: "鎌倉時代,将軍との間で御恩と奉公の主従関係で結ばれた武士",
		hint: "鎌倉幕府の基盤を支えた武士たちで、源頼朝から土地を与えられ、その見返りに忠誠を誓いました。彼らは戦時には出兵し、平時には京都や鎌倉で警護の任務を果たしました。",
		answers: ["御家人"],
		explanation: "御家人は鎌倉幕府の軍事的基盤となり、将軍との間で互恵関係を築きました"
	},
	{
		question: "鎌倉幕府を開いた源頼朝の死後,実権を握った北条氏が就いた実質的な幕府の最高役職",
		hint: "将軍を補佐し、政務全般を取り仕切る重要な役職でした。",
		answers: ["執権"],
		explanation: "北条氏が世襲した役職で、将軍を補佐し政務を総括しました。"
	},
	{
		question: "鎌倉時代,国司の支配する土地や荘園で,土地の管理や年貢の取り立てに当たった幕府の役職",
		hint: "東国から始まり、承久の乱後に全国に広がった武士の役職です。",
		answers: ["地頭"],
		explanation: "鎌倉幕府が設置し、荘園や公領で年貢徴収や治安維持を担当しました。"
	},
	{
		question: "1221年に起こった承久の乱の後,鎌倉幕府が朝廷の監視と西側の武士を支配するために京都に設置した役所",
		hint: "東国から始まり、承久の乱後に全国に広がった武士の役職です。",
		answers: ["六波羅探題|六波羅|六波羅幕府"],
		explanation: "承久の乱後、鎌倉幕府が京都に設置した役所で、朝廷の監視や西国支配を目的としました。"
	},
	{
		question: "承久の乱の後,執権北条時康が武家社会の慣習や裁判の例などをもとにして定めた法律",
		hint: "この法律は、鎌倉幕府の基本法として機能し、裁判の公平性を重視していました。",
		answers: ["御成敗式目|貞永式目"],
		explanation: "御成敗式目（貞永式目）は1232年、北条泰時が制定した日本最初の武家法で、公平な裁判と武士社会の秩序維持を目的としました。"
	},
	{
		question: "1274年と1281年の2度にわたって元が攻めてきた時の幕府の執権",
		hint: "鎌倉幕府の執権として、2度の侵攻に対して日本の防衛を指揮しました。彼は「異国警固版役」と呼ばれる防衛体制を整えました",
		answers: ["北条時宗"],
		explanation: "北条時宗は元寇時の鎌倉幕府執権で、日本の防衛を指揮した"
	},
	{
		question: "日本に元が攻めてきた頃の元の皇帝",
		hint: "エビフライ！この皇帝は、モンゴル帝国の5代目の大ハーンであり、中国の元朝の初代皇帝でもありました。",
		answers: ["フビライ・ハン|クビライ・カン|フビライ|クビライ|フビライ=ハン|クビライ=カン|フビライハン"],
		explanation: "フビライは1274年と1281年に日本侵攻を命じた元の皇帝です"
	},
	{
		question: "13世紀に中国の元にやってきたイタリア人で,日本を「黄金の国」としてヨーロッパに紹介した人物",
		hint: "この人物は、モンゴル帝国の皇帝フビライ・ハンに仕え、17年間にわたってアジアを旅した冒険家です。",
		answers: ["マルコ・ポーロ|マルコポーロ"],
		explanation: "13世紀のヴェネツィア商人で、東方見聞録を著した。　日本がジャパンと言われる要因"
	},
	{
		question: "後醍醐天皇が行った公家中心の政治",
		hint: "10世紀の特定の天皇の治世を理想としていました。",
		answers: ["建武の新政|けんむのしんせい"],
		explanation: "後醍醐天皇が行った公家中心の政治改革で、1333年から1336年まで続きました"
	},
	{
		question: "倭寇と区別するための割札をもって行われたことから名付けられた日明貿易の名称",
		hint: "この貿易では、日本と中国の代表者が持参した紙を合わせて身分を確認しました。",
		answers: ["勘合貿易|かんごうぼうえき"],
		explanation: "倭寇と区別するため、勘合という割符を使用した貿易形式です。"
	},
	{
		question: "明との貿易が始まったころ,南朝と北朝を統一した室町幕府の3代将軍",
		hint: "京都の北山に金色に輝く寺院を建立した人物です。",
		answers: ["足利義満|あしかがよしみつ"],
		explanation: "足利義満は室町幕府第3代将軍で、南北朝合一を果たし、明との貿易を開始しました"
	},
	{
		question: "室町幕府で将軍を補佐する役職",
		hint: "この役職は、京都の室町に置かれた幕府の中央機構で重要な位置を占めていました。",
		answers: ["管領|かんれい"],
		explanation: "室町幕府で将軍を補佐する重要な役職でした。"
	},
	{
		question: "慈照寺銀閣にみられる,今日の和風住宅のもとになった建築様式",
		hint: "この様式は、広々とした内部空間と自然光の巧みな取り入れが特徴です。",
		answers: ["書院造|しょいんづくり"],
		explanation: "慈照寺銀閣の1階に見られる書院造は、現代の和風住宅の原型となりました。作ったのは足利義政"
	},
	{
		question: "細川氏と山名氏の対立に,将軍の跡継ぎ問題が加わって起こった,11年にも及ぶ戦乱。",
		hint: "京都を中心に起こったこの戦乱は、瀬戸内海の制海権を分け合う二つの勢力の対立から始まりました。",
		answers: ["応仁の乱"],
		explanation: "室町幕府の権力争いから始まり、1467年から1477年まで続いた内乱です"
	},
	{
		question: "戦国大名が,領国の武士や農民の統制を図るために作った独自の決まり",
		hint: "戦国大名は、自分の領地を効果的に支配するために、独自の法律を制定しました。これは、家臣の行動や農民の生活を規制するものでした",
		answers: ["分国法"],
		explanation: "戦国大名が領国統治のために制定した独自の法令です"
	},
	{
		question: "応仁の乱の戦乱の被害から復興に取り組むなど,京都の自治において中心的な役割を果たしていた有力な商工業者たち。",
		hint: "京都の祇園祭の復活に尽力し、自治組織を形成した人々です。",
		answers: ["町衆"],
		explanation: "応仁の乱後、町衆が京都の復興と自治に大きな役割を果たしました"
	},
	{
		question: "応仁の乱の戦乱の後に広まった,下のものが上のものを実力で倒す風潮",
		hint: "京都の北山に金閣、東山に銀閣が建てられた時代の後に起こった出来事です。",
		answers: ["下剋上"],
		explanation: "応仁の乱後、実力主義の風潮が広がり、身分制度が崩れ始めました。"
	},
	{
		question: "鎌倉時代や室町時代に各地の港で年貢の海上輸送や保管などをしていた運送業者",
		hint: "瀬戸内海沿岸の商人たちが、海上交通と物流で重要な役割を果たしていました。彼らは海運に関わる独自の仕組みを持っていました。",
		answers: ["問丸|といまる"],
		explanation: "海上輸送と年貢管理を担った中世の商人集団で、海運業務に特化した組織でした。"
	},
	{
		question: "団結を固めた農民が,年貢をめぐって荘園領主などに交渉や抵抗をしたり,土倉や酒蔵などを襲って借金の帳消しを求めたりしたこと",
		hint: "中世の日本で、農民たちが苦しい生活から抜け出すために起こした集団行動があります。この行動は、年貢の重圧や借金に苦しむ人々が団結して起こしたもので、特に京都周辺から始まり、近畿地方に広がりました。",
		answers: ["百姓一揆|土一揆|徳政一揆|一揆"],
		explanation: "農民たちが団結して起こした抗議行動で、年貢の軽減や借金の帳消しを要求しました"
	},
	{
		question: "用水の管理や山林の利用などについて,村独自のおきてをつくるなど,室町時代の農民の自治的な結びつき",
		hint: "この組織は、「すべて」という意味を持つ漢字を使って名付けられました。",
		answers: ["惣村"],
		explanation: "惣村は室町時代の農民の自治組織で、用水や山林の管理などを行いました。"
	},
	{
		question: "惣村において村のことを相談したり村の決まりを決めるために,神社などで開いた会議",
		hint: "村人たちが集まって意見を出し合う場所で、「寄る」という言葉と関係があります。",
		answers: ["寄合|よりあい"],
		explanation: "惣村で村の問題を話し合う重要な会議です。"
	},
	{
		question: "15世紀に尚氏が統一して成立し,日本をはじめ,中国,挑戦,東南アジア各地を結ぶ中継ぎ貿易で栄えた王国",
		hint: "東シナ海に浮かぶ島々で、古くから「万国津梁」と呼ばれる架け橋の役割を果たしてきた地域です。",
		answers: ["琉球王国|琉球"],
		explanation: "15世紀に尚巴志が三山を統一し、琉球王国を樹立しました"
	},
	{
		question: "ヨーロッパから大西洋を渡り西インド諸島を発見したイタリア人",
		hint: "1492年、スペイン王室の支援を受けて3隻の船で大西洋を横断した航海者です。",
		answers: ["コロンブス|クリストファー・コロンブス|クリストフォロ・コロンボ"],
		explanation: "1492年に新大陸を発見したジェノヴァ出身の航海者です。"
	},
	{
		question: "インド航路を発見したポルトガル人",
		hint: "アフリカ南端の「喜望峰」を越えて、インド洋を北上する航路を開拓した人物です。この航路は香辛料貿易の独占に繋がり、ポルトガルの繁栄をもたらしました。",
		answers: ["ヴァスコ・ダ・ガマ|バスコ＝ダ＝ガマ|バスコ・ダ・ガマ"],
		explanation: "ヴァスコ・ダ・ガマは1498年にインドのカリカットに到達し、ヨーロッパとインドを結ぶ航路を初めて開拓しました。"
	},
	{
		question: "日本にキリスト教を伝えたイエズス会の宣教師",
		hint: "この人物は、1549年に日本に到着し、鹿児島を拠点に布教活動を開始しました。彼の名前は、スペインやポルトガルで広く知られています。",
		answers: ["フランシスコ・ザビエル|ザビエル|フランシスコ＝ザビエル"],
		explanation: "フランシスコ・ザビエルは、イエズス会の創設メンバーであり、日本に初めてキリスト教を伝えた宣教師です。"
	},
	{
		question: "ザビエルが来日した背景にあったヨーロッパでの宗教活動",
		hint: "16世紀のヨーロッパで、カトリック教会に対する批判的な動きが起こっていました。",
		answers: ["宗教改革|カトリック教会の改革運動"],
		explanation: "ザビエルの来日は、ヨーロッパでの宗教改革に対する挽回策の一環でした"
	},
	{
		question: "南蛮人が日本にキリスト教を伝えた時代に,海外布教を積極的に行ったカトリック教会の組織",
		hint: "この組織は、ヨーロッパで宗教改革が進む中、カトリック教会の勢力を回復するために設立されました。創設者の一人は、フランシスコ・ザビエルと深い関係があります。",
		answers: ["イエズス会|耶蘇会|ジェズイット会"],
		explanation: "イエズス会は1534年に設立され、カトリック教会の布教活動を積極的に行った修道会です"
	},
	{
		question: "ポルトガル人によって日本に伝えられた鉄砲を,長篠の戦いで集団戦法に用いた尾張出身の戦国大名",
		hint: "この戦国大名は尾張出身で、当時の最新兵器である鉄砲を大量に用意し、長篠の戦いで武田軍を打ち破りました。また、この人物は「戦国三英傑」の一人として知られています。",
		answers: ["織田信長|信長"],
		explanation: "織田信長は1575年の長篠の戦いで、鉄砲を効果的に活用した集団戦法を導入し、武田軍を壊滅させました。"
	},
	{
		question: "織田信長が安土城の城下で,市場の税を免除し,座の特権を廃止して,商工業の発展を図った政策",
		hint: "織田信長は、この政策によって城下町を「楽」しい場所にしようとしました。",
		answers: ["楽市楽座|楽市・楽座"],
		explanation: "信長が安土城下で実施した商工業振興策で、市場税免除と座の廃止を行った"
	},
	{
		question: "織田信長の後を受けて国内を統一し,日本における封建社会を確立した人物",
		hint: "この人物は、織田信長の家臣から出世し、「太閤」の称号を得ました。",
		answers: ["豊臣秀吉|とよとみひでよし|秀吉|ひでよし|羽柴秀吉"],
		explanation: "織田信長の死後、天下統一を果たし、関白・太政大臣となりました。"
	},
	{
		question: "織田信長の後を受けて国内を統一し,日本における風県社会を確立した人物",
		hint: "この人物は、織田信長の家臣から出世し、「太閤」の称号を得ました。",
		answers: ["豊臣秀吉|とよとみひでよし|秀吉|ひでよし|羽柴秀吉"],
		explanation: "織田信長の死後、天下統一を果たし、関白・太政大臣となりました。"
	},
	{
		question: "豊臣秀吉が農民から武器を取り上げた政策",
		hint: "1588年、全国の農民たちは突然、大仏のために何かを寄付するよう求められました。",
		answers: ["刀狩|刀狩り|刀狩令"],
		explanation: "秀吉が農民から武器を没収し、兵農分離を進めた政策です。"
	},
	{
		question: "豊臣秀吉が行った,全国の田畑の広さや土地の良しあしを調べ,収穫高を石高であらわした政策",
		hint: "豊臣秀吉が行ったこの政策の名前は、彼が関白を退いた後の称号に由来します。この政策は全国の土地を調査し、収穫量を統一的な基準で把握することを目的としていました。また、この調査によって「石高」という単位が用いられるようになりました。",
		answers: ["太閤検地"],
		explanation: "太閤検地は、全国の田畑を調査し、石高で収穫量を算出する豊臣秀吉の政策です。年貢の公平な徴収を目的としました。"
	},
	{
		question: "豊臣秀吉が政権を握ったころの文化",
		hint: "南蛮人との交流が盛んになり、新しい文化の波が押し寄せました。",
		answers: ["桃山文化|安土桃山文化"],
		explanation: "豪華絢爛な文化が花開き、茶道や城郭建築が発展しました。"
	},
	{
		question: "茶の湯の作法を定め,わび茶を大成させた人物",
		hint: "この人物は、室町時代後期から安土桃山時代にかけて活躍し、堺の商人の家に生まれました。",
		answers: ["千利休"],
		explanation: "千利休は、わび茶を完成させ、茶の湯を大成した茶人として知られています。"
	},
	{
		question: "江戸幕府成立のきっかけとなった,1600年に起きた戦い",
		hint: "戦いが行われた場所は現在の岐阜県にあり、「天下分け目」とも称される大規模な戦いでした。この戦いでは、徳川家康が率いる東軍と石田三成が率いる西軍が激突しました。",
		answers: ["関ヶ原の戦い|関ヶ原|関ケ原の戦い"],
		explanation: "1600年、美濃国関ヶ原で東軍と西軍が衝突した戦いで、東軍の勝利が江戸幕府成立の礎となりました。"
	},
	{
		question: "関ヶ原の戦いの前後に徳川氏に従った大名で,幕藩体制確立後,遠隔地に配置された",
		hint: "江戸幕府の体制下で、主に東北や九州などの辺境地域に配置されました。",
		answers: ["外様大名"],
		explanation: "関ヶ原の戦い後、徳川家に従った大名で、幕藩体制下で遠隔地に配置された"
	},
	{
		question: "徳川家康は,大名や商人に許可証を与えて,海外への渡航を許した。この許可証を持つ船",
		hint: "徳川家康が発行した許可証は、赤い印が特徴で、東南アジアとの貿易に使われました。この制度のもと、正式な貿易船として認められた船がありました。",
		answers: ["朱印船|しゅいんせん"],
		explanation: "朱印船は徳川家康が発行した朱印状を携帯し、東南アジア諸国と貿易を行った船です。"
	},
	{
		question: "徳川幕府が,大名を統制し,幕府の支配を強化するために定めた法律。",
		hint: "江戸時代初期に制定された、大名の行動を規制する重要な法令です。この法令は、城の修理や婚姻、参勤など、大名の様々な活動に制限を設けました。また、この法令は時代とともに改訂され、より具体的な内容になっていきました。",
		answers: ["武家諸法度|ぶけしょはっと"],
		explanation: "武家諸法度は、江戸幕府が大名統制のために制定した基本法です。1615年に徳川家康の命により2代将軍秀忠が発布し、以後改訂を重ねました。大名の行動を厳しく規制し、城の修築、婚姻、参勤交代などを定めました。これにより、幕府は大名を効果的に支配し、幕藩体制を強化しました。"
	},
	{
		question: "日本人の外国への行き来を禁止し,外国との貿易を幕府が独占した外交政策。",
		hint: "江戸時代、日本は海外との交流を厳しく制限しました。長崎には特別な場所が設けられ、限られた国との交易が行われていました。この政策は、キリスト教の影響を恐れた幕府が、国内の安定を保つために実施したものです。",
		answers: ["鎖国|鎖国政策"],
		explanation: "江戸幕府が1630年代に確立した対外政策で、約200年続きました。"
	},
	{
		question: "日本が鎖国のときも,幕府との貿易が許されたヨーロッパの国。",
		hint: "北海に面したこの国は、チューリップで有名で、風車が多く見られる景観が特徴的です。また、この国は17世紀に黄金時代を迎え、東インド会社を設立して海外貿易を盛んに行いました。",
		answers: ["阿蘭陀|オランダ|ネーデルランド|Netherlands|オランダ王国|ネーデルランド王国|Holland"],
		explanation: "鎖国時代、唯一貿易を許されたヨーロッパの国はオランダでした。"
	},
	{
		question: "オランダから長崎に入港する船により提出された,海外の情報が記された報告書。",
		hint: "長崎の出島に関係があり、江戸時代の日蘭交流において重要な役割を果たしました。海外の情報を日本に伝える貴重な手段でした。",
		answers: ["オランダ風説書|オランダふうせつがき|阿蘭陀風説書"],
		explanation: "オランダ風説書は、長崎に入港するオランダ船が提出した海外情報の報告書です。"
	},
	{
		question: "3代将軍家光のときに定められた制度で, 大名は一年おきに領地と江戸に住むことをさだめられた。",
		hint: "この制度は、江戸時代の大名統制のための重要な政策。大名たちは長い行列を組んで移動し、その様子は江戸の街路で見物された。この制度により、江戸の人口や経済に大きな影響があった。",
		answers: ["参勤交代|さんきんこうたい"],
		explanation: "徳川家光が1635年に制度化した大名統制政策です。大名は1年ごとに江戸と領地を往復し、幕府への忠誠を示しました。"
	},
	{
		question: "1637年に九州地方で起きた,厳しい年貢とキリスト教徒への迫害に対する一揆。",
		hint: "九州の西部にある半島と諸島で起こった大規模な反乱です。当時の領主の圧政と重税、そして特定の宗教信者への弾圧が重なって発生しました。この事件は、日本の鎖国政策にも大きな影響を与えました。",
		answers: ["島原の乱|島原・天草一揆|島原・天草の乱"],
		explanation: "1637年に九州西部で発生した大規模な農民反乱。藩の圧制と重税、キリシタン弾圧が原因となった。"
	},
	{
		question: "1637年に九州地方で起きた,厳しい年貢とキリスト教徒への迫害に対する一揆。",
		hint: "農民を5人ずつのグループに分けて管理するものでした。グループ内での相互監視と連帯責任が特徴で、年貢の納入や犯罪防止に効果がありました。",
		answers: ["五人組|ごにんぐみ"],
		explanation: "五人組は農民5戸を1単位とし、年貢納入や犯罪に対して連帯責任を負わせる制度です。"
	},
	{
		question: "17世紀後半,蝦夷地において,松前藩に対抗して戦ったアイヌの指導者。",
		hint: "北海道の先住民族の指導者で、江戸時代初期に活躍しました。不公平な交易に反発し、和人に対して立ち上がりました。現在の北海道日高地方を拠点としていました。",
		answers: ["シャクシャイン|沙牟奢允|サクサイヌ|サムクサイヌ"],
		explanation: "アイヌの英雄として知られる指導者で、1669年に松前藩と戦いました。"
	},
	{
		question: "江戸時代,各街道に設置された,旅人の通行手形や荷物などを調べる監視所。",
		hint: "箱根や新居、碓氷などの交通の要衝に設置され、幕府の政治・軍事・経済・情報の諸機能的な任務を持っていました。",
		answers: ["関所|番所"],
		explanation: "江戸幕府が街道の主要地点に設置し、通行や物資の移動を厳しく管理していました。"
	},
	{
		question: "18世紀前半,目安箱を設けて広く人々の意見を求めたり,新田の開発を行うなど幕府財政の立て直しをはかった将軍。",
		hint: "この将軍の時代に、享保の改革として知られる一連の政策が実施されました。",
		answers: ["徳川吉宗|徳川 吉宗"],
		explanation: "享保の改革を行い、幕府財政の立て直しに尽力した将軍です。"
	},
	{
		question: "徳川吉宗が行った幕府政治の改革。",
		hint: "この改革は、江戸時代中期に行われ、幕府の財政難を解決するために実施されました。当時、幕府の収入の主な源は米でした。",
		answers: ["享保の改革"],
		explanation: "徳川吉宗が行った幕府の財政再建と政治改革で、江戸三大改革の一つです。"
	},
	{
		question: "徳川吉宗が行った幕府政治の改革。",
		hint: "江戸時代の裁判制度を大きく変えた、上下2巻からなる重要な法典です。",
		answers: ["公事方御定書|くじかたおさだめがき"],
		explanation: "享保の改革で制定され、裁判の基準を明確化した法典。"
	},
	{
		question: "18世紀後半,株仲間を奨励して税収の増加を図り,長崎貿易を奨励した幕府の老中。",
		hint: "彼は、幕府財政の立て直しのため、商業活動の活性化と海外貿易の拡大を推進しました。",
		answers: ["田沼意次|田沼 意次"],
		explanation: "18世紀後半に幕府の老中として経済政策を主導しました。"
	},
	{
		question: "1792年,ラスクマンが根室に渡航したころ,松平定信が幕府の政治を立て直すために行った改革。",
		hint: "江戸時代後期、幕府の財政難を解決するために、倹約令を出した人物がいました。",
		answers: ["寛政の改革|松平定信の改革"],
		explanation: "松平定信が1787年から1793年に行った幕政改革で、倹約令などを実施しました。"
	},
	{
		question: "19世紀の初め,日本地図を作るために,日本全国を実測した人物🗾。",
		hint: "この人物は、元々造り酒屋を営んでいましたが、50歳を過ぎてから天文学に興味を持ち、学問の道に入りました。",
		answers: ["伊能忠敬"],
		explanation: "江戸時代後期に日本全国を歩いて測量し、精密な日本地図を作成しました。"
	},
	{
		question: "1837年,大阪で乱を起こした,もと大阪町奉行所の役人。",
		hint: "天保の大飢饉の際、自らの蔵書を売り払い、民衆の救済に尽力した人物です。",
		answers: ["大塩平八郎"],
		explanation: "江戸時代後期の1837年に大阪で反乱を起こした元与力です。"
	},
	{
		question: "19世紀の半ば,老中水野忠邦が行った改革で,きびしいけんやくをすすめ,株仲間を解散させた。",
		hint: "この改革は、幕府が財政難と内外の危機に直面した時期に行われました。当時、清がある戦争で敗北し、それが日本に大きな影響を与えました。また、この改革は江戸時代の三大改革の一つとして知られています。",
		answers: ["天保の改革|天保改革"],
		explanation: "水野忠邦が行った天保の改革は、幕府の立て直しを図った重要な政策でした。厳しい倹約令や株仲間の解散などが特徴的でした。"
	},
	{
		question: "江戸時代に,幕府や藩に税を納めることで営業の独占を許され,大きな利益を上げていた商工業の同業者組合。",
		hint: "この組織は、江戸時代の商業システムの中心的な存在でした。徳川吉宗の時代に公認され、田沼意次の時代に大いに推奨されました。商品の価格や供給を安定させる役割を果たしましたが、新規参入者への妨害という問題も抱えていました。",
		answers: ["株仲間"],
		explanation: "株仲間は江戸時代の商工業者の同業組合で、幕府から営業独占権を得て大きな利益を上げていました。"
	},
	{
		question: "年貢米や特産物を運んで貨幣にするために,大阪などに設けた建物。",
		hint: "江戸時代の経済の中心地で、多くの商人が集まる場所を思い出してください。また、各藩が自分たちの産物を保管し、取引するための施設について考えてみましょう。",
		answers: ["蔵屋敷"],
		explanation: "蔵屋敷は各藩が年貢米や特産物を換金するために設けた施設です。蔵屋敷は、江戸時代に大名が所有していた建物で、主に：1. 年貢米や特産物の保管 2. 商品の販売 3. 藩の出先機関としての機能。"
	},
	{
		question: "江戸時代後半,綿織物や絹織物などを生成するために,人々を一つの作業場にあつめ,分業によって行った生産方法。",
		hint: "、この生産方法は、江戸時代後半に発展した新しい形態の工業生産システムです。農村地域で行われ、主に織物産業で見られました。この方法は、効率的な生産を目指し、多くの労働者を一か所に集めて作業を行いました。",
		answers: ["マニュファクチュア|問屋制家内工業"],
		explanation: "江戸時代後半、織物業で分業制による効率的な生産方法が発展しました。これは近代工業の先駆けとなりました。"
	},
	{
		question: "17世紀後半から18世紀初めにかけて,上方の商業の発展を背景とした町人を中心に栄えた文化。",
		hint: "歌舞伎や浮世絵など、庶民の娯楽文化が発展しました。",
		answers: ["元禄文化|上方文化|町人文化"],
		explanation: "17世紀後半から18世紀初めにかけて、上方を中心に町人文化が開花しました。経済発展により、芸術や文学が大きく進展しました。"
	},
	{
		question: "元禄文化のころ,「日本永代蔵」などの浮世草子で町人の生き方をありのままに描いた人物。",
		hint: "この人物は、元禄時代に活躍した文学者で、俳諧師としても知られています。大坂を中心に活動し、庶民の生活を鮮やかに描写した作品で一世を風靡しました。",
		answers: ["井原西鶴"],
		explanation: "井原西鶴は浮世草子の代表的作家で、「日本永代蔵」などの町人物を執筆しました。"
	},
	{
		question: "17世紀の後半に,松尾芭蕉が描いた紀行文で,東北・北陸を回る旅を記した。",
		hint: "この人物は、元禄時代に活躍した文学者で、俳諧師としても知られています。大坂を中心に活動し、庶民の生活を鮮やかに描写した作品で一世を風靡しました。",
		answers: ["井原西鶴"],
		explanation: "井原西鶴は浮世草子の代表的作家で、「日本永代蔵」などの町人物を執筆しました。"
	},
	{
		question: "1972年,日本が中国との国交を正常化したのち,経済的にも政治的にも中国との関係を深めることを目的に1978年に結んだ条約。",
		hint: "この条約は、日中間の戦争状態を正式に終結させ、両国の平和と友好を深めるために結ばれました。条約の名前には、両国の関係性を表す重要なキーワードが含まれています。また、この条約の締結は、1972年の出来事から6年後に実現しました。",
		answers: ["日中平和友好条約"],
		explanation: "日中平和友好条約は、日中国交正常化後の両国関係を強化する重要な協定でした。"
	}
];


export {
	n as q
};
//# sourceMappingURL=quiz-BLAESt70.js.map
