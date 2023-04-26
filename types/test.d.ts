interface IConfigJsonArg {
    Font?: string;                                      //[フォント]→[フォント]    フォント名
    FontPoint?: number;                                   //[フォント]→[サイズ](ポイント)    1 to 1000
    FontDecimal?: number;                                 //[フォント]→[サイズ](ポイント、小数点以下)    0 to 9
    FontWeight?: number;                                  //[フォント]→[太さ]    0 to 1000
    BoldFace?: IBooleanFlag;                                  //[フォント]→[太字(重ね書き)]
    FontForceProportional?: IBooleanFlag;                     //[フォント]→[プロポーショナルフォント扱い]
    FontSameAllEncoding?: IBooleanFlag;                       //[フォント]→[多言語]→[すべての言語で同じフォントを使用する]
    FallbackFont?: IBooleanFlag;                              //[フォント]→[追加のフォント]
    FallbackFonts?: {                              //[フォント]→[追加のフォント]→[...]   []で任意の要素数    0 to 4
        Font?: string;                                      //[フォント]    フォント名
        Adjust?: IBooleanFlag;                                    //[サイズ/位置を調整]
        AdjustSize10pt?: number;                              //[サイズ]  -1000 to 1000
        AdjustX10pt?: number;                                 //[X位置]   -1000 to 1000
        AdjustY10pt?: number;                                 //[Y位置]   -1000 to 1000
        Range?: IBooleanFlag;                                     //[文字コード範囲を指定]
        RangeType?: "nascii" | "include" | "exclude";       //[ASCII以外全て] [指定の文字コード範囲のみ] [指定の文字コード範囲を除く]
        Ranges?: {                                     //[文字コード範囲]  []で任意の要素数
            Begin: number;                                        //範囲の開始Unicode 1 to 1114111
            End?: number;                                         //範囲の終了Unicode 1 to 1114111
        }[];
    }[];

    Orikaeshi?: number;                                   //[体裁]→[折り返し文字数]  10 to 8000
    AutoAdjustOrikaeshi?: "fix" | "window" | "max";       //[体裁]→[折り返し]    xAutoAdjustOrikaeshiの 0 | 1 | 2
    Kinsoku?: "none" | "useenv" | "useconfig";            //[体裁]→[禁則処理]    xKinsokuの 0 | 1 | 2
    KinsokuInfo?: IForbiddenProcessingDetail;                       //[体裁]→[禁則処理]→[IForbiddenProcessingDetail...]

    CorrectLineNo?: IBooleanFlag;                             //[体裁]→[詳細]→[行番号の計算方法]
    LineSpace?: number;                                   //[体裁]→[詳細]→[行間]    0 to 12
    LineSpacePercent?: number;                            //[体裁]→[詳細]→[行間]    詳細指定 0 to 300
    CharSpace?: number;                                   //[体裁]→[詳細]→[文字間]  0 to 11
    Tategaki?: number;                                    //[体裁]→[詳細]→[縦書き]
    Dangumi?: number;                                     //[体裁]→[詳細]→[段組]
    FreeCursor?: IBooleanFlag;                                //[体裁]→[詳細]→[フリーカーソルモード]
    SaveLastPos?: IBooleanFlag;                               //[体裁]→[詳細]→[カーソル位置の自動復元]

    Tab?: number;                                         //[体裁]→[タブ] タブの文字数 タブキーで空白入力
    TabMode?: "normal" | "free" | "TSV" | "CSV";        //[体裁]→[タブ] 自由配置 TSVモード CSVモード
    TabStop?: string;                                   //[体裁]→[タブ]→[タブストップ]
    ConvertReturnInCell?: "none" | "specialLF" | "halfArrow";   //[体裁]→[タブ]→[セル内改行の変換]

    Indent?: number;                                      //[体裁]→[インデント]→[自動インデント]
    BlockQuote?: IBooleanFlag;                                //[体裁]→[インデント]→[行頭のタブ文字で段落全体をインデントする]
    BquoteItemized?: IBooleanFlag;                            //[体裁]→[インデント]→[箇条書きへのインテリジェントな対応]
    BquoteInclude?: string;                             //[体裁]→[インデント]→[インデント対象に追加する文字]
    BlockquoteFix?: number;                               //[体裁]→[インデント]→[指定桁数をインデントする]

    CurLineEnable?: IBooleanFlag;                             //[デザイン]→[カーソル行] ON/OFF
    CurLineActive?: IBooleanFlag;                             //[デザイン]→[カーソル行] アクティブ時のみ
    CurLineLineNoOnly?: IBooleanFlag;                         //[デザイン]→[カーソル行] 行番号部分のみ
    CurLineSelectMo?: IBooleanFlag;                           //[デザイン]→[カーソル行] 選択時も表示
    UnderLine?: number;                                   //[デザイン]→[カーソル行] 文字色モード 下線モード 背景色モード 
    UnderLineDot?: IBooleanFlag;                              //[デザイン]→[カーソル行] 点線
    UnderLineWidth?: number;                              //[デザイン]→[カーソル行] 線幅 0 to 8
    ImeColorCurLine?: number;                             //[デザイン]→[カーソル行(IME ON時)] と [IME変換中の色]
    ImeColorCaret?: IBooleanFlag;                             //[デザイン]→[キャレット(IME ON時)]
    VertLine?: number;                                    //[デザイン]→[カーソル位置の縦線] 0:なし　1:点線　2:実線
    SelectColorInvert?: number;                           //[デザイン]→[範囲選択] 0:通常 1:反転色 2:半透明背景
    ShowCR?: IBooleanFlag;                                    //[デザイン]→[改行文字]
    ShowEOF?: IBooleanFlag;                                   //[デザイン]→[EOF(ファイルの末尾)]
    ShowTab?: IBooleanFlag;                                   //[デザイン]→[タブ文字]
    ShowBoxHalf?: IBooleanFlag;                               //[デザイン]→[半角空白]
    ShowBoxFull?: IBooleanFlag;                               //[デザイン]→[全角空白]
    Ruler?: IBooleanFlag;                                     //[デザイン]→[ルーラー]
    TabRuler?: IBooleanFlag;                                  //[デザイン]→[ルーラー]→[8単位] [10単位]
    ShowLineNo?: IBooleanFlag;                                //[デザイン]→[行番号]
    ShowPageNo?: number;                                  //[デザイン]→[行番号]→[ページ番号表示]
    ActiveKakko?: IBooleanFlag;                               //[デザイン]→[行番号]→[対応する括弧の強調表示]
    ActiveTagPair?: IBooleanFlag;                             //[デザイン]→[行番号]→[対応するタグの強調表示]
    GuideLine?: number;                                   //[デザイン]→[ガイドライン(縦)] [ガイドライン(横)]
    GuideLineInterval?: number;                           //[デザイン]→[ガイドライン(縦)]の間隔 [ガイドライン(横)]の間隔
    OrikaeshiLine?: number;                               //[デザイン]→[折り返し桁数の縦線] 0:なし　1:点線　2:実線
    ShowFormLine?: IBooleanFlag;                              //[デザイン]→[行番号]→[整形ライン] ON/OFF
    FormLine?: number;                                    //[デザイン]→[行番号]→[整形ライン] 桁数

    ColorSet?: {                                                //[デザイン]
        normal?: IConfigTextColorAndBackStyle;           //普通の文字
        curline?: IConfigTextColor;                             //カーソル行
        curlineime?: IConfigTextColor;                             //カーソル行(IME ON時)
        caretime?: IConfigTextColor;                             //キャレット(IME ON時)
        imeinput?: IConfigTextColorAndBackTransparency;               //IME変換中の色
        curlinevert?: IConfigTextColor;                             //カーソル位置の縦線
        selection?: IConfigTextColorAndBackStyleTransparency;     //範囲選択
        cr?: IConfigTextColor;                             //改行文字、EOF(ファイルの末尾)
        tab?: IConfigTextColor;                             //タブ文字
        space?: IConfigTextColor;                             //全角空白、半角空白
        ruler?: IConfigTextColorAndBackColor;                     //ルーラー
        foldable?: IConfigTextColorAndBackTransparency;               //折りたたみ用の余白
        folded?: IConfigTextColorAndBackTransparency;               //折りたたまれた行の表示
        lineno?: IConfigTextColorAndBackStyleTransparency;     //行番号
        linenoupdated?: IConfigTextColorAndBackStyleTransparency;     //編集した行の行番号
        linenomark?: IConfigTextColorAndBackStyleTransparency;     //マークした行の行番号
        kakkopair?: IConfigTextColorAndBackStyleTransparency;     //対応する括弧の強調表示
        tagpair?: IConfigTextColorAndBackStyleTransparency;     //対応するタグの強調表示
        curword?: IConfigTextColorAndBackStyleTransparency;     //カーソル位置の単語
        guidelinevert?: IConfigTextColor;                             //ガイドライン(縦)
        indent1?: IConfigTextColorTransparency;                       //深さの色1
        indent2?: IConfigTextColorTransparency;                       //深さの色2
        indent3?: IConfigTextColorTransparency;                       //深さの色3
        indent4?: IConfigTextColorTransparency;                       //深さの色4
        indent5?: IConfigTextColorTransparency;                       //深さの色5
        indent6?: IConfigTextColorTransparency;                       //深さの色6
        indent7?: IConfigTextColorTransparency;                       //深さの色7
        indent8?: IConfigTextColorTransparency;                       //深さの色8
        guidelinehorz?: IConfigTextColor;                             //ガイドライン(横)
        orikaeshiline?: IConfigTextColor;                             //折り返し桁数の縦線
        formline?: IConfigTextColor;                             //整形ライン
        outlinepane?: IConfigTextColorAndBackColor;                     //アウトライン解析の枠
        tree1?: IConfigTextColorAndBackColor;                     //レベルの色1
        tree2?: IConfigTextColorAndBackColor;                     //レベルの色2
        tree3?: IConfigTextColorAndBackColor;                     //レベルの色3
        tree4?: IConfigTextColorAndBackColor;                     //レベルの色4
        tree5?: IConfigTextColorAndBackColor;                     //レベルの色5
        tree6?: IConfigTextColorAndBackColor;                     //レベルの色6
        tree7?: IConfigTextColorAndBackColor;                     //レベルの色7
        tree8?: IConfigTextColorAndBackColor;                     //レベルの色8
        outlinepanesel?: IConfigTextColorAndBackColor;                     //アウトライン解析の枠選択
        outlinebar?: IConfigTextColorAndBackColor;                     //見出しバー
        stripe?: IConfigTextColor;                             //背景ストライプ表示
        lastedit?: IConfigTextColor;                             //最後の編集した所
        tabmode?: IConfigTextColorAndBackColor;                     //タブモードでのタブの色
        inactivetab?: IConfigTextColorAndBackColor;                     //非アクティブなタブの色
        //----------------------
        script?: IConfigTextColorAndBackStyleTransparency;     //スクリプト部分
        hilight1?: IConfigTextColorAndBackStyleTransparency;     //強調表示1
        hilight2?: IConfigTextColorAndBackStyleTransparency;     //強調表示2
        hilight3?: IConfigTextColorAndBackStyleTransparency;     //強調表示3
        hilight4?: IConfigTextColorAndBackStyleTransparency;     //強調表示4
        hilight5?: IConfigTextColorAndBackStyleTransparency;     //強調表示5
        hilight6?: IConfigTextColorAndBackStyleTransparency;     //強調表示6
        hilight7?: IConfigTextColorAndBackStyleTransparency;     //強調表示7
        hilight8?: IConfigTextColorAndBackStyleTransparency;     //強調表示8
        num?: IConfigTextColorAndBackStyleTransparency;     //number
        string?: IConfigTextColorAndBackStyleTransparency;     //文字定数
        htmltag?: IConfigTextColorAndBackStyleTransparency;     //HTMLタグ全体
        htmlelem?: IConfigTextColorAndBackStyleTransparency;     //HTMLタグのエレメント
        htmlattr?: IConfigTextColorAndBackStyleTransparency;     //HTMLタグのアトリビュート
        hilightline1?: IConfigTextColorAndBackStyleTransparency;     //行の強調表示1
        hilightline2?: IConfigTextColorAndBackStyleTransparency;     //行の強調表示2
        hilightline3?: IConfigTextColorAndBackStyleTransparency;     //行の強調表示3
        hilightline4?: IConfigTextColorAndBackStyleTransparency;     //行の強調表示4
        comment?: IConfigTextColorAndBackStyleTransparency;     //コメント
        ifdef?: IConfigTextColorAndBackStyleTransparency;     //#ifdef等での無効部分
        email?: IConfigTextColorAndBackStyleTransparency;     //メールアドレス
        url?: IConfigTextColorAndBackStyleTransparency;     //ホームページURL
        filename?: IConfigTextColorAndBackStyleTransparency;     //ファイル名と思わしき場所
        especially1?: IConfigTextColorAndBackStyleTransparency;     //特に強調表示1
        especially2?: IConfigTextColorAndBackStyleTransparency;     //特に強調表示2
        especially3?: IConfigTextColorAndBackStyleTransparency;     //特に強調表示3
        especially4?: IConfigTextColorAndBackStyleTransparency;     //特に強調表示4
        hilightfound?: IConfigTextColorAndBackStyleTransparency;     //検索stringの強調
    };
}

interface IForbiddenProcessingDetail {                                      //IForbiddenProcessingDetail
    Burasage?: 0 | 1 | 2;                                       //
    CRBurasage?: IBooleanFlag;                                        //
    Wordwrap?: IBooleanFlag;                                          //
    BurasageWidth?: number;                                       //0 to 4
    NoDiv?: IBooleanFlag;                                             //
    TopChars?: string;                                          //
    BottomChars?: string;                                       //
    BurasageChars?: string;                                     //
}

type IBooleanFlag = 0 | 1 | false | true;
type IConfigRGBHex = `#${string}`; //"#RRGGBB" | "#RGB"
type IConfigSysColor = "syswindow" | "syswindowtext" | "syshighlight" | "syshighlighttext" | "default";
type IConfigStyles = "normal" | "bold" | "underline" | "underline bold" | "italic" | "italic bold" | "underline italic" | "underline italic bold" | "outline" | "superbold" | "shadow";
interface IConfigTextColor { text?: IConfigRGBHex | IConfigSysColor; }
interface IConfigTextColorTransparency { text?: IConfigRGBHex | IConfigSysColor | "transparent"; }
interface IConfigTextColorAndBackColor { text?: IConfigRGBHex | IConfigSysColor; back?: IConfigRGBHex | IConfigSysColor; }
interface IConfigTextColorAndBackTransparency { text?: IConfigRGBHex | IConfigSysColor | "transparent"; back?: IConfigRGBHex | IConfigSysColor | "transparent"; }
interface IConfigTextColorAndBackStyle { text?: IConfigRGBHex | IConfigSysColor; back?: IConfigRGBHex | IConfigSysColor; style?: IConfigStyles; }
interface IConfigTextColorAndBackStyleTransparency { text?: IConfigRGBHex | IConfigSysColor | "transparent"; back?: IConfigRGBHex | IConfigSysColor | "transparent"; style?: IConfigStyles | "transparent"; }
