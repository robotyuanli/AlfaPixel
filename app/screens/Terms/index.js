import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthActions } from '@actions';
import { WebView } from 'react-native-webview';
import { View, BackHandler, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { BaseStyle, Hebrew, BaseColor } from '@config';
import { SafeAreaView, Header, Text, Footer, Icon } from '@components';
import styles from './styles';
import { ads } from '../../../app.json';

class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adsShow: true,
    }
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackPress,
    );
  }

  onBackPress = () => {
    const { navigation } = this.props;
    navigation.goBack();
    return true;
  };

  goUp = () => {
    this.refs?._scrollView?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  onClose = () => {
    this.props.authActions.setStatus(false);
  };

  render() {
    const { navigation, auth } = this.props;
    const adsShow = auth.adsShow;

    return (
      <SafeAreaView
        style={BaseStyle.safeAreaView}>
        <View style={styles.header}>
          <Header navigation={navigation} main={false} onBack={null} />
        </View>
        <ScrollView ref="_scrollView">
          {adsShow && 
            <>
              <TouchableOpacity onPress={this.onClose}>
                <Icon
                    style={styles.closeIcon}
                    name="times"
                    size={30}
                    color={BaseColor.textSecondaryColor}
                />
              </TouchableOpacity>
              <WebView
                useWebKit={true}
                ref={(ref) => { this.webview = ref; }}
                style={{ height: 400 }}
                javaScriptEnabled={true}
                source={{
                    uri: ads,
                }}
                onNavigationStateChange={(event) => {
                  if (event.url !== ads) {
                    this.webview.stopLoading();
                    Linking.openURL(event.url);
                  }
                }}
              />
            </>
          }
          <View style={styles.content}>
            <Text style={styles.title}> {Hebrew.TERMS_OF_USE} </Text>
            <Text style={styles.policy}>
              כללי
              {'\n'}
            </Text>
            <Text style={styles.policy}>
              גולש יקר, אנא קרא את תנאי השימוש ומדיניות הפרטיות שלהלן בקפידה לפני
              גלישה ושימוש באפליקציה זו (להלן “www.torah4u.co.il”) מטרתם, להבהיר
              לך את תנאי השימוש והמדיניות הנהוגה באתר לרבות תיאור אופן השימוש של
              מפעילי האתר במידע, איסופו ושימושיו.{'\n'}
            </Text>
            <Text style={styles.policy}>
              בעצם הגלישה באתר, או השימוש בו, הגולש מאשר שקרא והבין את תנאי השימוש
              ומדיניות הפרטיות והוא מסכים להם, ללא תנאי או סייג, ומובהר כי אלו
              יחולו עליו ויחייבו אותו.{'\n'}
            </Text>
            <Text style={styles.policy}>
              אם הגולש אינו מסכים עם תנאי השימוש ומדיניות הפרטיות, אזי הוא אינו
              רשאי לגלוש או לעשות שימוש באתר.{'\n'}
            </Text>
            <Text style={styles.policy}>
              האמור בתנאי שימוש ומדיניות פרטיות זו מתייחס לנשים וגברים כאחד
              והשימוש בלשון זכר הינו מטעמי נוחות בלבד.{'\n'}
            </Text>
            <Text style={styles.policy}>
              האתר, וכל מה שנכלל בו ומוצג בו, מוצעים לשימוש הגולשים AS IS, ללא כל
              אחריות, מפורשת ומשתמעת, מכל סוג שהוא, של מפעילי האתר. הצוות שמפעיל
              את האתר עושה מאמץ רב להבטיח שכל התכנים המוצגים בו יהיו איכותיים
              ומדויקים, אבל למרות זאת ייתכן מצב שבו נפלה טעות או נוצר חוסר דיוק.
              {'\n'}
            </Text>
            <Text style={styles.policy}>
              יש להבהיר כי אין אפשרות להתאים את התכנים באתר ואת האתר בכללותו
              לצרכים הספציפיים של כל אחד ואחת, ולכן לא תהיינה לגולשים (או למי
              שמטעמם) כל טענות או תביעות כלפי המפעילים של האתר, בגין התכנים
              שמוצגים בו, נכונותם, היותם מדויקים, התאמתם לציפיות או היותם לא
              מלאים.{'\n'}
            </Text>
            <Text style={styles.policy}>
              אין באמור לעיל בכדי לגרוע מכך שמפעילי האתר לא מתחייבים כי הוא נקי
              משגיאות, פגמים ורכיבים מזיקים לרבות וירוסים. מפעילי האתר אינם אחראים
              להפרת זכויות צד שלישי כלשהו ואינם מתחייבים לכך שהאתר יתנהל בבטחה
              ויהיה חסין ביחס לטעויות, להפרעות מכל סוג ולגישה לא מורשית.{'\n'}
            </Text>
            <Text style={styles.policy}>
              כאן באתר ניתן למצוא שלל תכנים במגוון רחב של תחומי ידע ובהם רפואה,
              כלכלה, משפט, מסחר ועוד. חלק מהתכנים יוצרו על-ידי חברי מערכת האתר,
              ואחרים סופקו ומנוהלים על-ידי גורמים מחוץ למערכת. על הגולשים מוטלת
              האחריות לבחון כל תוכן ולאמתו אם ברצונו לעשות בו שימוש.{'\n'}
            </Text>
            <Text style={styles.policy}>
              יודגש כי תוכן שמפורסם באתר אינו המלצה ולא חוות דעת. כמו כן, במקרים
              שבהם נדרשת התייעצות עם אנשי מקצוע מוסמכים, התכנים אינם תחליף לקבלת
              ייעוץ מאנשי מקצוע. האחריות על השימוש בתכנים ובאתר היא על הגולשים
              בלבד.{'\n'}
            </Text>
            <Text style={styles.subTitle}>השימוש באתר{'\n'}</Text>
            <Text style={styles.policy}>
              הגולש רשאי להשתמש באתר, בתכניו ובשירותים הפועלים בו, בהתאם לכללים
              המפורטים להלן.{'\n'}
            </Text>
            <Text style={styles.policy}>
              אין להשתמש באתר, בתכניו ובשירותיו באופן אחר.{'\n'}
            </Text>
            <Text style={styles.policy}>
              הגולש אינו רשאי להשתמש באתר למטרות מסחריות, אלא אם ניתן אישור מפורש
              בכתב או במייל על יד מפעילי האתר.{'\n'}
            </Text>
            <Text style={styles.policy}>
              אין להפעיל או לאפשר להפעיל כל יישום מחשב או כל אמצעי אחר, לרבות
              תוכנות מסוג Robots וכדומה, לשם חיפוש, סריקה, העתקה או אחזור אוטומטי
              של תכנים מהאתר.{'\n'}
            </Text>
            <Text style={styles.policy}>
              בכלל זה, אין ליצור ואין להשתמש באמצעים כאמור לשם יצירת אוסף או מאגר
              שיכילו תכנים או מידע מהאתר.{'\n'}
            </Text>
            <Text style={styles.policy}>
              אין להציג תכנים מהאתר בכל דרך שהיא – ובכלל זה באמצעות כל תוכנה,
              מכשיר, אביזר או פרוטוקול תקשורת המשנים את עיצובו או מחסירים מהאתר
              תכנים או אינפורמציה.{'\n'}
            </Text>
            <Text style={styles.policy}>
              אין לקשר לאתר ולתכנים מכל מקור המכיל תכנים פורנוגראפיים, תכנים
              המעודדים לגזענות או להפליה פסולה, או המנוגדים לחוק, או המעודדים
              פעילות המנוגדת לחוק, או שפרסומם מנוגד לחוק;{'\n'}
            </Text>
            <Text style={styles.policy}>
              יודגש כי מפעילי האתר, מי מטעמם והאתר עצמו, אינם נושאים בכל אחריות
              שהיא על נזקים שייגרמו עקב קישור לתכנים, או בשל כל פרסום תכנים בכל
              דרך שהיא. כמו כן לא יישאו האתר ומפעיליו בכל אחריות על המוצרים
              והשירותים שמוצגים דרך קישורים (בהתאם להגדרה להלן), ובהתאם הם אינם צד
            </Text>
            <Text style={styles.policy}>
              בכל התקשרות שהיא עם שירות ו/או מוצר כאמור, לרבות בכל הנוגע למכירתם,
              רכישתם, אספקתם או הצעתם לגולשים. האחריות הבלעדית והמלאה לכל קישור,
              פרסום או הצגה של תכנים שנעשו על-ידך הינה עליך בלבד, ובזאת אתה מתחייב
              על שיפוי האיגוד בגין נזקים שייגרמו כתוצאה מכך.{'\n'}
            </Text>

            <Text style={styles.subTitle}>
              קישורים והפניות באתר www.torah4u.co.il{'\n'}
            </Text>
            <Text style={styles.policy}>
              באתר עשויים להופיע הפניות ו/או קישורים אל אתרים אחרים, מקורות מידע,
              ארגונים, חברות וגופים מסוגים שונים (להלן "קישורים"). יודגש כי להסיק
              מהכללתו של קישור באתר לגבי התוכן באתר אליו מפנה הקישור, ובפרט לא
              לגבי היותו מלא, עדכני או מהימן. האתר ומפעיליו (ולכל מי מטעמם) לא
              נושאים בשום אחריות לגבי כל קישור שהוא. הקישורים ו/או התוכן אשר מופיע
              באתר עשויים להוביל
            </Text>
            <Text style={styles.policy}>
              למידע או הצעות בדבר רכישת שירותים ו/או מוצרים, ולאתר ולמפעילי (ולכל
              מי מטעמם) אין שום אחריות בגין אותם מוצרים ו/או שירותים, והם אינם חלק
              מהתקשרות כלשהי בינך לבין צד שלישי שאליו מוליך קישור. כל התקשרות מסוג
              זה תיעשה אך ורק מול צד שלישי, באחריותו ו/או באחריותך בלבד, והאתר
              ומפעיליו (וכל מי מטעמם) אינם נושאים באחריות או במחויבות כלשהי לגבי
              ההתקשרות.
            </Text>
            <Text style={styles.policy}>
              {'\n'}הסרת קישור שהופיע באתר ו/או הוספת קישור חדש תיעשה אך ורק לפי
              שיקול הדעת המוחלט של מפעילי האתר. מומלץ בזאת לקרוא בתשומת לב את כל
              תנאי השימוש בקישורים ואת מדיניות הפרטיות לגביהם.{'\n'}
            </Text>
            <Text style={styles.policy}>
              אין באמור לעיל בכדי לגרוע מכך שלאתר, למפעיליו ולכל מי מטעמם אין כל
              אחריות בגין כל נזק, ישיר או עקיף, שייגרם כתוצאה משימוש באתר, הסתמכות
              על מידע שמופיע בו, רכישת מוצרים ו/או שירותים באתרים שאליהם מובילים
              קישורים באתר, הצעה לרכישה של מוצרים ו/או שירותים, שימוש בתכנים
              שמפורסמים באתר על-ידי צד שלישי ושימוש במידע שמפורסם באתר על-ידי צד
              שלישי – נזק לך או לרכוש.{'\n'}
            </Text>

            <Text style={styles.subTitle}>
              {'\n'}הודעות ודיוור{'\n'}
            </Text>
            <Text style={styles.policy}>
              גולש אשר מאשר קבלת דיוורים ו/או ניוזלטר ייחשב כמי שהביע עניין בקבלת
              עדכונים, הודעות ודברי פרסום (להלן: "התוכן") – הן מטעם האתר והן מטעם
              מפרסים אחרים בו. התוכן יימסר בדיוור ישיר – לרבות דוא"ל, SMS, מערכות
              חיוג אוטומטיות, MMS, ו/או דרכי תקשורת נוספות, עכשוויות או עתידיות.
              {'\n'}
            </Text>
            <Text style={styles.policy}>
              הגולש מאשר כי הוא מודע לכך שכלל הפרטים אשר הוא מוסר ישמשו את מפעילי
              האתר ו/או מי מטעמם, לרבות מפרסמים באתר, לצרכי דיוור התוכן אליו.
              {'\n'}
            </Text>
            <Text style={styles.policy}>
              לגולש תהא נתונה בכל עת אפשרות להסיר עצמו מרשימת הדיוור, מכל סיבה
              שברצונו, כמפורט על גבי כל הודעת דיוור או ע"י שליחת מייל לכתובת תחת
              הכותרת "בקשת הסרה מרשימת דיוור" ובתוכן ההודעה לציין את פרטי ההתקשרות
              (מייל + שם פרטי ומשפחה) שנמסרו במסגרת ההרשמה לשירות
            </Text>
            <Text style={styles.policy}>
              הדיוור. לחילופין יכול הגולש למחוק את עצמו בלחיצה על כפתור "הסר"
              הנמצא בכל דיוור. יובהר כי היעדר המילה "פרסומת" ו/או "פרסומות"
              מכותרות הדיוורים באמצעי התקשורת השונים לא תהווה עילה
            </Text>
            <Text style={styles.policy}>
              {'\n'}לתביעה במסגרת חוק התקשורת (בזק ושידורים), התשס"ח – 2008. לגולש
              לא תהא כל טענה כלפי האתר, מפעיליו ו/או מי מטעמם ו/או מפרסמים אחרים
              באתר, בקשר לקבלת דיוורים כאמור. האתר ו/או מפעיליו אינם אחראיים ביחס
              למשלוח דיוורים על ידי מפרסמים אחרים ולא ישאו באחריות נזיקית
            </Text>
            <Text style={styles.policy}>
              העלולה להיגרם מפעולה זו. הגולש אינו מחויב למסור פרטים כלשהם לאתר
              ו/או מפעיליו ומסירתם תיעשה בהתאם לרצון הגולש ואחריותו הבלעדית.{'\n'}
            </Text>

            <Text style={styles.subTitle}>מאגר מידע</Text>
            <Text style={styles.policy}>
              במסגרת השימוש בתכנים שונים באתר – www.torah4u.co.il, יתכן ויתבקש
              הגולש לספק פרטים אישיים כגון שם מלא, כתובת ודוא"ל. הגולש מצהיר כי
              ידוע לו כי עם הקלדת פרטיו כאמור, הוא נותן את הסכמתו להיכלל במאגר
              המידע שמנהל האתר בהתאם לחוק הגנת הפרטיות, התשמ"א – 1981 אשר מטרתו
              דיוור ישיר ומסירה לצדדים שלישיים.{'\n'}
            </Text>
            <Text style={styles.policy}>
              יובהר כי לא חלה על הגולש שום חובה למסור את המידע ומסירתו תלויה
              ברצונו ובהסכמתו.{'\n'}
            </Text>

            <Text style={styles.subTitle}>חוק הגנת הפרטיות</Text>
            <Text style={styles.policy}>
              על-פי חוק הגנת הפרטיות, התשמ"א-1981, כל אדם זכאי, בעצמו או על ידי
              בא-כוחו המורשה בכתב או על ידי אפוטרופוס, לעיין במידע המוחזק לגביו
              במאגר מידע. אדם שעיין במידע שעליו ומצא כי אינו נכון, שלם, ברור או
              מעודכן, רשאי לפנות לבעל מאגר המידע להלן "www.torah4u.co.il" בבקשה
              לתיקון המידע או למחקו.{'\n'}
            </Text>

            <Text style={styles.subTitle}>עוגיות Cookies{'\n'}</Text>
            <Text style={styles.policy}>
              אתר "www.torah4u" עושה שימוש ב"עוגיות" (Cookies) לשם פעילותו, לרבות
              לצורך איסוף המידע לגבי השימוש של הגולשים באתר, בדיקת זהות משתמשים
              בשירות או מידע באתר, על מנת לאפשר לגולש שימוש נוח וקל יותר באתר, על
              מנת לנתח ולהתאים באופן ייחודי את האתר לצרכי והעדפות הגולש ולשם
              פעילות אבטחת מידע.{'\n'}
            </Text>
            <Text style={styles.policy}>
              עוגיות הינן קבצי טקסט אשר מאוחסנים על ידי שרתי האתר באמצעות הדפדפן
              על כונן קשיח של המחשב בו הגולש משתמש. העוגיות אינן מכילות מידע שמזהה
              את הגולש באופן אישי אולם הינם כוללות מידע ובו נתונים על פעילותו
              באתר. הגולש רשאי לבחור, באמצעות שינוי הגדרות הדפדפן בו הוא משתמש,
              לסרב לשמור עוגיות אלו.{'\n'}
            </Text>
            <Text style={styles.policy}>
              האתר "www.torah4u.co.il" משתמש בעוגיות גם בכדי לייצר רשימות
              רימרקטינג.{'\n'}
            </Text>

            <Text style={styles.subTitle}>שימוש במידע{'\n'}</Text>
            <Text style={styles.policy}>
              במהלך שימוש הגולש באתר "www.torah4u.co.il" ייאסף מידע אודות הגולש,
              הרגלי גלישתו באתר, פרסומות ותחומי עניין של הגולש, עמודי תוכן בהם צפה
              וכו, בעצם גלישתו באתר "www.torah4u.co.il" הגולש מאשר הסכמתו לאיסוף
              המידע ע"י מפעילי האתר בכפוף לתקנון.{'\n'}
            </Text>
            <Text style={styles.policy}>
              אתר "www.torah4u.co.il" מתחייב לנהוג במידע שנאסף אודות גולשיו בהתאם
              למגבלות כל הדין.{'\n'}
            </Text>

            <Text style={styles.subTitle}>
              שינויים בתקנון האתר ומדיניות פרטיות{'\n'}
            </Text>
            <Text style={styles.policy}>
              מפעילי האתר "www.torah4u.co.il" רשאים לערוך ו/או לשנות את תקנון האתר
              ומדיניות הפרטיות בכל עת וללא צורך בהודעה מראש על ביצוע שינוים ו/או
              עדכונים כאמור.{'\n'}
            </Text>

            <Text style={styles.subTitle}>סודיות וקנין רוחני{'\n'}</Text>
            <Text style={styles.policy}>
              בכפוף לתנאים המפורטים לעיל בנושא פרטיות ולהוראות כל דין, כל חומר /
              מידע שיעביר אלינו גולש, או יפרסם באתר, לרבות, בין השאר, תגובות,
              הערות, הצעות וכדומה (להלן: "חומרים / מידע") הם בבחינת מידע לא קנייני
              ולא סודי וכך ננהג בהם. האתר רשאי להשתמש בחומרים / מידע, לכל מטרה,
              לרבות, בין השאר, לצורך העתקתם, גילוים, העברתם, פרסומם וכו.{'\n'}
            </Text>
            <Text style={styles.policy}>
              מלוא הקניין הרוחני וכלל זכויות היוצרים באתר, בכל השירותים שמוצעים בו
              ובכל התכנים שנכללים בהם (פרט לתוכן שמפורסם בידי הגולשים), הינם של
              מפעילי האתר או לחילופין שייכים לצד שלישי אשר התיר למפעילי האתר לעשות
              בהם שימוש. חל איסור מוחלט להפיץ, לשכפל, להציג בפומבי, לעבד, לשנות,
            </Text>
            <Text style={styles.policy}>
              ליצור נגזרות שונות, להשכיר או למכור כל חלק מהנ"ל. האיסור חל על כל
              גולש, כולל באמצעות או בשיתופו של צד שלישי כלשהו, ולגבי כל אמצעי או
              דרך פעולה, ללא קבלה של הסכמה מראש, בכתב, מטעם מפעילי האתר ובעלי
              זכויות נוספים, בהתאם לעניין.
            </Text>
            <Text style={styles.policy}>
              {'\n'}איסור זה תקף גם ביחס לעריכה, תרגום או עיבוד שבוצעו בידי מפעילי
              האתר לתוכן שהוזן על-ידי גולש באתר או נמסר על-ידו.{'\n'}
            </Text>

            <Text style={styles.subTitle}>העדר אחריות{'\n'}</Text>
            <Text style={styles.policy}>
              כל שימוש של גולש באתר מתבצע באחריותו המלאה בלבד. האתר ומפעיליו אינם
              אחראים במידה וייגרם נזק מסוג כלשהו, לרבות ומבלי לגרוע נזק ישיר, נזק
              אגבי, נזק תוצאתי, עונשים, אובדן רווחים, פגיעה בהתנהלות העסקית או
              אובדן מידע אשר נובעים מהשימוש באתר, מחוסר יכולת להשתמש בו, מגישה
              אליו או מהיעדר גישה לאתר.{'\n'}
            </Text>
            <Text style={styles.policy}>
              הגבלת האחריות הזו תקפה גם לגבי כל נזק לציוד המחשוב של הגולש וכל
              הידבקות בווירוס אשר עלולה לחבל בציוד זה.{'\n'}
            </Text>
            <Text style={styles.policy}>
              יובהר כי מפעילי האתר אינם ערבים ואינם מתחייבים לכך שכל קובץ אשר זמין
              להורדה מהאתר, מכל סוג שהוא, יהיה נקי מסוסים טרויאנים, תולעים,
              וירוסים או כל קוד אחר בעל תכונות הרסניות ומזיקות.{'\n'}
            </Text>
            <Text style={styles.policy}>
              אין לאתר "www.torah4u.co.il" שום אחריות ביחס לתכנים אשר מוצגים בו.
              אי הנשיאה באחריות הינה בתוקף, לרבות ומבלי לגרוע, לגבי כתבות, מאמרים,
              תמונות, עצות, הנחיות ו/או מידע בכל פורמט אחר המוצג לגולשים ועומד
              לרשותם, כיום או בעתיד, ובין אם התוכן הינו בבעלות האתר ומפעיליו ובין
              אם בבעלותו של צד שלישי, הגולש אחראי בלעדי על שימוש בתכני האתר ולא
              יוכל לבוא בשום טענה / דרישה כלפיי בעלי האתר או מפעיליו.{'\n'}
            </Text>
            <Text style={styles.policy}>
              {'\n'}האתר ומפעיליו אינם אחראים, בשום דרך שהיא, במפורש או במשתמע, על
              התכנים באתר ועל הפעולות שהגישה אליהן אפשרית על סמך הגישה לאתר, לגבי
              שירותים שניתן להגיע אליהם באמצעות הגישה לאתר זה, לרבות ובין השאר
              אחריות על איכות, התאמה למטרות מסוימות, אי הפרה ו/או נזקים שעלולים
              להיגרם עקב פגמים או תקלות בתוכנה אשר מפעילה אתר זה.{'\n'}
            </Text>
            <Text style={styles.policy}>
              {'\n'}האחריות לגבי תוכן מודעות שמפורסמות באתר, לרבות פרטי מידע
              וזכויות, חלה על המפרסמים בלבד. האתר אינו נושא באחריות לגבי תוכן
              פרסומים באתר ומהימנותם, ולרבות כל שירות ו/או מוצר שמוצע למשתמשים
              בהקשר לתכנים אלה.{'\n'}
            </Text>
            <Text style={styles.policy}>
              עצם פרסום מידע מסחרי לא מהווה כל המלצה או עידוד לרכישת מוצרים ו/או
              שירותים שמוצעים לרכישה דרך קישורים באתר.{'\n'}
            </Text>
            <Text style={styles.policy}>
              הגולש פוטר בזאת את האתר, את מפעיליו וכל מי מטעמים, מכל אחריות בגין
              שימוש במידע אשר מפורסם כתוכן, ומצהיר בזאת כי הוא הוא יודע שהמידע לא
              נבחן, וכי האתר, מפעיליו וכל מי מטעמם לא נושאים באחריות לגביו.{'\n'}
            </Text>
            <Text style={styles.subTitle}>שיפוי</Text>
            <Text style={styles.policy}>
              הגולש ישפה ויפצה את האתר "www.torah4u.co.il", עובדיו, מנהליו או מי
              מטעמו בגין כל נזק, הפסד, או הוצאה שייגרמו להם – ובכלל זה שכ"ט עו"ד
              והוצאות משפט – עקב הפרת תנאי שימוש ומדיניות פרטיות זו ו/או כתוצאה
              מכל טענה ו/או תביעה ו/או דרישה אשר תועלה על ידי צד ג' ביחס
              לתכנים/מידע אשר מסר הגולש לפרסום בעת שהותו באתר.{'\n'}
            </Text>

            <Text style={styles.subTitle}>דין וסמכות שיפוט</Text>
            <Text style={styles.policy}>
              על תנאי שימוש ומדיניות פרטיות זו יחולו אך ורק דיני מדינת ישראל ולבתי
              המשפט בחיפה תהיה הסמכות הבלעדית לדון בכל מחלוקת הנובעת מתנאים
              והוראות אלו.
            </Text>
          </View>
          <Footer
            style={styles.footer}
            goUp={this.goUp}
            navigation={navigation}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(AuthActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Terms);
