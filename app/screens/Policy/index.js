import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthActions } from '@actions';
import { WebView } from 'react-native-webview';
import { View, ScrollView, BackHandler, TouchableOpacity, Linking } from 'react-native';
import { BaseStyle, Hebrew, BaseColor } from '@config';
import { SafeAreaView, Text, Header, Footer, Icon } from '@components';
import styles from './styles';
import { ads } from '../../../app.json';

class Policy extends Component {
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
            <Text style={styles.title}> {Hebrew.PRIVACY_POLICY} </Text>
            <Text style={styles.subTitle}>א. הקדמה{'\n'}</Text>
            <Text style={styles.policy}>
              1. הפרטיות של המבקרים באתר שלנו חשובה לנו מאוד, ואנחנו מחויבים
              לשמירה עליה. המדיניות הזו מסבירה מה נעשה עם הפרטים האישיים שלכם.
              {'\n'}
            </Text>
            <Text style={styles.policy}>
              2. ההסכמה לשימוש שלנו בעוגיות בהתאם לתנאים של מדיניות זו בזמן הביקור
              הראשון באתר שלנו, מאפשרת לנו להשתמש בעוגיות בכל פעם שאתם מבקרים
              באתר.{'\n'}
            </Text>

            <Text style={styles.subTitle}>ב. קרדיט</Text>
            <Text style={styles.policy}>
              המסמך הזה נוצר בעזרת תבנית של SEQ Legal (seqlegal.com) ושונתה על ידי
              Website Planet (www.websiteplanet.com){'\n'}
            </Text>

            <Text style={styles.subTitle}>ג. איסוף פרטים אישיים{'\n'}</Text>
            <Text style={styles.policy}>
              ייתכן שהסוגים הבאים של פרטים אישיים ייאספו, יאוחסנו, ויעשה בהם
              שימוש: {'\n'}
            </Text>
            <Text style={styles.policy}>
              1. מידע על המחשב שלכם, כולל כתובת ה-IP שלכם, מיקומכם הגאוגרפי, סוג
              הדפדפן והגרסה שלו, ומערכת ההפעלה; {'\n'}
            </Text>
            <Text style={styles.policy}>
              2. מידע על הביקורים והשימוש שלכם באתר, כולל מקור ההפניה, אורך
              הביקור, צפיות בעמודים, ונתיבי המעבר שלכם באתר;{'\n'}
            </Text>
            <Text style={styles.policy}>
              3. מידע, כמו למשל כתובת הדואר האלקטרוני שלכם, שאתם מזינים בזמן
              ההרשמה לאתר שלנו; {'\n'}
            </Text>
            <Text style={styles.policy}>
              4. מידע שאתם מזינים בזמן יצירת פרופיל באתר שלנו—לדוגמה, השם שלכם,
              תמונות פרופיל, מגדר, יום הולדת, מצב מערכות יחסים, תחומי עניין
              ותחביבים, פרטי השכלה, ופרטי תעסוקה;{'\n'}
            </Text>
            <Text style={styles.policy}>
              5. מידע, כמו למשל השם וכתובת הדואר האלקטרוני שלכם, שאתם מזינים על
              מנת ליצור מנוי להודעות הדואר האלקטרוני ו/או הניוזלטר שלנו; {'\n'}
            </Text>
            <Text style={styles.policy}>
              6. המידע שאתם מזינים בזמן השימוש בשירותים באתר שלנו;{'\n'}
            </Text>
            <Text style={styles.policy}>
              7. מידע שנוצר בזמן השימוש באתר שלנו, כולל מתי, כמה, ובאילו נסיבות
              אתם משתמשים בו;{'\n'}
            </Text>
            <Text style={styles.policy}>
              8. מידע שקשור לכל דבר שאתם רוכשים, שירותים בהם אתם משתמשים, או
              העברות שאתם מבצעים באתר שלנו, הכולל את השם שלכם, הכתובת, מספר
              הטלפון, כתובת הדואר האלקטרוני, ופרטי כרטיס האשראי שלכם;{'\n'}
            </Text>
            <Text style={styles.policy}>
              9. מידע שאתם מפרסמים באתר שלנו בכוונה לפרסמו באינטרנט, שכולל את שם
              המשתמש שלכם, תמונות הפרופיל, ותוכן התגובות שלכם;{'\n'}
            </Text>
            <Text style={styles.policy}>
              10. מידע שנכלל במסרים שאתם שולחים לנו בדואר האלקטרוני או באמצעות
              האתר שלנו, כולל תוכן המסר והמטא-דאתה שלו;{'\n'}
            </Text>
            <Text style={styles.policy}>
              11. כל סוג אחר של פרטים אישיים שאתם שולחים אלינו.{'\n'}
            </Text>
            <Text style={styles.policy}>
              לפני שתחשפו בפנינו את הפרטים האישיים של אדם אחר, עליכם לבקש את הסכמת
              האדם הזה גם עבור השיתוף וגם עבור העיבוד של אותם הפרטים האישיים לפי
              מדיניות זו.{'\n'}
            </Text>

            <Text style={styles.subTitle}>ד. שימוש בפרטים האישיים שלכם</Text>
            <Text style={styles.policy}>
              בפרטים אישיים שנמסרו לנו דרך האתר שלנו ייעשה שימוש למטרות שצוינו
              במדיניות זו, או בעמודים הרלוונטיים שבאתר. ייתכן שנשתמש בפרטים
              האישיים שלכם למטרות הבאות:{'\n'}
            </Text>
            <Text style={styles.policy}>1. ניהול האתר והעסק שלנו;{'\n'}</Text>
            <Text style={styles.policy}>
              2. התאמה האישית של האתר עבורכם;{'\n'}
            </Text>
            <Text style={styles.policy}>
              3. לאפשר לכם להשתמש בשירותים הזמינים באתר שלנו;{'\n'}
            </Text>
            <Text style={styles.policy}>
              4. שליחה של סחורות שרכשתם דרך האתר;{'\n'}
            </Text>
            <Text style={styles.policy}>
              5. אספקה של שירותים שרכשתם דרך האתר;{'\n'}
            </Text>
            <Text style={styles.policy}>
              6. שליחה של הצהרות, חשבונות עסקה, ותזכורות תשלום אליכם, ואיסוף
              תשלומים מכם.{'\n'}
            </Text>
            <Text style={styles.policy}>
              7. לשלוח לכם הודעות מסחריות שאינן שיווקיות;{'\n'}
            </Text>
            <Text style={styles.policy}>
              8. לשלוח לכם התראות בדואר אלקטרוני שביקשתם באופן ספציפי;{'\n'}
            </Text>
            <Text style={styles.policy}>
              9. שליחה של הניוזלטר שלנו אליכם בדואר אלקטרוני, אם ביקשתם זאת (אתם
              יכולים להודיע לנו בכל עת שכבר אין לכם צורך בניוזלטר);{'\n'}
            </Text>
            <Text style={styles.policy}>
              10. שליחה של מסרים שיווקיים שקשורים לעסק שלנו והעסקים של חברות צד ג’
              שנבחרו בקפידה שלדעתנו עשויות לעניין אתכם, בדואר או, במקרים שבהם
              הסכמתם לכך ספציפית, בדואר האלקטרוני, או באמצעות טכנולוגיות דומות
              (אתם יכולים ליידע אותנו בכל עת אם אתם כבר לא מעוניינים במסרים
              שיווקיים);{'\n'}
            </Text>
            <Text style={styles.policy}>
              1. אספקה של מידע סטטיסטי בנוגע למשתמשים שלנו לצד ג’ (אבל צד ג’ זה לא
              יוכל לזהות אף משתמש בודד לפי המידע);{'\n'}
            </Text>
            <Text style={styles.policy}>
              2. טיפול בבירורים ותלונות שהוגשו על ידכם או נוגעות אליכם וקשורות
              לאתר שלנו;{'\n'}
            </Text>
            <Text style={styles.policy}>
              3. לשמור על האתר שלנו מאובטח ולמנוע הונאה;{'\n'}
            </Text>
            <Text style={styles.policy}>
              4. אימות של היענות לתנאי השירות המכתיבים את אופן השימוש באתר (כולל
              ניטור של הודעות פרטיות שנשלחו דרך שירות ההודעות הפרטיות של האתר
              שלנו);{'\n'}
            </Text>
            <Text style={styles.policy}>5. ושימושים אחרים.{'\n'}</Text>
            <Text style={styles.policy}>
              אם תמסרו לנו מידע אישי לפרסום באתר שלנו, אנחנו נפרסם את המידע ונשתמש
              בו בדרכים אחרות בהתאם לרישיון שתספקו לנו. ניתן להשתמש בהגדרות
              הפרטיות שלכם כדי להגביל את הפרסום של המידע שלכם באתר שלנו, וניתן
              לשנות אותן בעזרת בקרות הפרטיות שבאתר. אנחנו לא נספק את הפרטים
              האישיים שלכם ללא הסכמתכם לכל צד ג’ שהוא, לצורך השיווק הישיר שלו, או
              של כל צד ג’ אחר.{'\n'}
            </Text>

            <Text style={styles.subTitle}>ה. חשיפת פרטים אישיים{'\n'}</Text>
            <Text style={styles.policy}>
              אנחנו עשויים למסור את הפרטים האישיים שלכם לכל אחד מהעובדים, המנהלים,
              המבטחים, היועצים המקצועיים, הסוכנים, הספקים, או קבלני המשנה שלנו,
              במידה סבירה וכנדרש למטרות המצוינות במדיניות זו.{'\n'}
            </Text>
            <Text style={styles.policy}>
              אנחנו עשויים למסור את הפרטים האישיים שלכם לכל חברה בקבוצת החברות
              שלנו (זה אומר כל חברות הבת שלנו, חברת הגג שלנו, וכל חברות הבת שלה)
              במידה סבירה וכנדרש למטרות המצוינות במדיניות זו.{'\n'}
            </Text>
            <Text style={styles.policy}>
              אנחנו עשויים למסור את הפרטים האישיים שלכם:{'\n'}
            </Text>
            <Text style={styles.policy}>
              1. לפי מה שנדרש מאתנו על פי חוק;{'\n'}
            </Text>
            <Text style={styles.policy}>
              2. בהקשר של כל הליך משפטי קיים או עתידי;{'\n'}
            </Text>
            <Text style={styles.policy}>
              3. על מנת לבסס, להפעיל, או להגן על זכויותינו המשפטיות (כולל אספקה של
              מידע לאחרים למטרות מניעת הונאה והפחתה של סיכון אשראי);{'\n'}
            </Text>
            <Text style={styles.policy}>
              4. לרוכש (או הרוכש הפוטנציאלי) של כל עסק או רכוש שאנחנו רוכשים (או
              שוקלים לרכוש);{'\n'}
            </Text>
            <Text style={styles.policy}>
              5. ולכל אדם שאנחנו מאמינים במידה סבירה שעשוי לפנות לבית דין או לכל
              רשות מוסמכת לצורך מסירה של הפרטים האישיים בהם סביר לדעתנו שאותו בית
              דין או רשות יורה על מסירה של פרטים אישיים אלה.{'\n'}
            </Text>
            <Text style={styles.policy}>
              למעט על פי הכתוב במדיניות זו, אנו לא נספק את הפרטים האישיים שלכם לצד
              ג’.
            </Text>
            <Text style={styles.subTitle}>ו. העברות נתונים בינלאומיות{'\n'}</Text>
            <Text style={styles.policy}>
              1. ייתכן שמידע שאנחנו אוספים יאוחסן, יעובד, ויועבר בין כל אחת
              מהמדינות בהן אנו פועלים, על מנת לאפשר לנו להשתמש במידע בהתאם
              למדיניות זו.{'\n'}
            </Text>
            <Text style={styles.policy}>
              2. ייתכן שמידע שאנחנו אוספים יועבר למדינות הבאות, להן אין חוקי הגנת
              נתונים התואמים את אלה הפועלים באזור הכלכלי האירופי: ארצות הברית של
              אמריקה, רוסיה, יפן, סין, והודו.{'\n'}
            </Text>
            <Text style={styles.policy}>
              3. פרטים אישיים שאתם מפרסמים באתר שלנו או מוסרים לפרסום באתר שלנו
              עשויים להיות זמינים, באמצעות האינטרנט, מסביב לעולם. אנחנו לא יכולים
              למנוע את השימוש או השימוש לרעה במידע הזה בידי אחרים.{'\n'}
            </Text>
            <Text style={styles.policy}>
              4. אתם מביעים הסכמה להעברות הפרטים האישיים המתוארות בסעיף ו’ זה.
              {'\n'}
            </Text>
            <Text style={styles.subTitle}>ז. שמירת פרטים אישיים{'\n'}</Text>
            <Text style={styles.policy}>
              1. סעיף ג’ זה מפרט את תהליך ומדיניות שמירת הנתונים שלנו, המתוכננים
              לעזור להבטיח שאנחנו נענים לחובות המשפטיות שלנו הנוגעות לשמירה
              ולמחיקה של פרטים אישיים.{'\n'}
            </Text>
            <Text style={styles.policy}>
              2. פרטים אישיים שאנחנו מעבדים עבור כל מטרה או מטרות, לא יישמרו יותר
              מכמה שנדרש עבור מטרה או מטרות אלה.{'\n'}
            </Text>
            <Text style={styles.policy}>
              3. מבלי לגרוע מן האמור בסעיף ז-2, לרוב אנו נמחק נתונים אישיים
              הנמצאים בקטגוריות המפורטות מטה בתאריך/שעה המפורטים מטה:{'\n'}
            </Text>
            <Text style={styles.policy}>
              {'4. סוג הנתונים האישיים יימחק {הזינו תאריך/שעה};'}
              {'\n'}
            </Text>
            <Text style={styles.policy}>
              {'5. ו-{הזינו תאריך/שעה נוספים}.'}
              {'\n'}
            </Text>
            <Text style={styles.policy}>
              על אף ההוראות האחרות בסעיף ז’, אנו נשמור מסמכים (כולל מסמכים
              אלקטרוניים) המכילים נתונים אישיים:{'\n'}
            </Text>
            <Text style={styles.policy}>
              1. לפי מה שנדרש מאתנו על פי חוק;{'\n'}
            </Text>
            <Text style={styles.policy}>
              2. אם לדעתנו המסמכים עשויים להיות רלוונטיים לכל הליך משפטי מתמשך או
              פוטנציאלי;{'\n'}
            </Text>
            <Text style={styles.policy}>
              3. על מנת לבסס, להפעיל, או להגן על זכויותינו המשפטיות (כולל אספקה של
              מידע לאחרים למטרות מניעת הונאה והפחתה של סיכון אשראי).{'\n'}
            </Text>
            <Text style={styles.subTitle}>
              ח. אבטחת הפרטים האישיים שלכם{'\n'}
            </Text>
            <Text style={styles.policy}>
              1. אנחנו ננקוט משנה זהירות ארגוני וטכני סביר על מנת למנוע את האבדן,
              השימוש לרעה, או השינוי של הפרטים האישיים שלכם.{'\n'}
            </Text>
            <Text style={styles.policy}>
              2. אנחנו נאחסן את כל הפרטים האישיים שאתם מספקים בשרתים מאובטחים
              (המוגנים בסיסמא ובחומת אש).{'\n'}
            </Text>
            <Text style={styles.policy}>
              3. כל ההעברות הכספיות הממוחשבות שבוצעו דרך האתר שלנו יהיו מוגנות
              באמצעות טכנולוגיית הצפנה.{'\n'}
            </Text>
            <Text style={styles.policy}>
              4. אתם מכירים בכך שהשידור של מידע על פני האינטרנט אינו מאובטח מעצם
              היותו, ואנחנו ללא יכולים להבטיח שנתונים שנשלחים דרך האינטרנט יהיו
              מאובטחים.{'\n'}
            </Text>
            <Text style={styles.policy}>
              5. אתם אחראים על שמירת הסיסמא בה אתם משתמשים לקבלת גישה לאתר שלנו
              חסויה; אנחנו לא נבקש מכם את הסיסמא שלכם (למעט בזמן ההתחברות לאתר
              שלנו).{'\n'}
            </Text>

            <Text style={styles.subTitle}>ט. תיקונים</Text>
            <Text style={styles.policy}>
              אנחנו עשויים לעדכן מדיניות זו מעת לעת באמצעות פרסום של גרסה חדשה
              באתר שלנו. עליכם לבדוק את העמוד הזה מדי פעם על מנת לוודא שאתם מבינים
              כל שינוי שנעשה במדיניות זו. אנחנו עשויים להודיע לכם על שינויים
              במדיניות זו בהודעת דואר אלקטרוני או דרך מערכת ההודעות הפרטיות שבאתר
              שלנו.{'\n'}
            </Text>

            <Text style={styles.subTitle}>י. הזכויות שלכם</Text>
            <Text style={styles.policy}>
              אתם יכולים להורות לנו לספק לכם כל פרט מפרטיכם האישיים שאנו מחזיקים
              הנוגעים אליכם; אספקת פרטים אלה תהיה כפופה לתנאים הבאים:{'\n'}
            </Text>
            <Text style={styles.policy}>
              {'1. תשלום של עמלה {הזינו עמלה אם יש כזו};'}
              {'\n'}
            </Text>
            <Text style={styles.policy}>
              {
                '2. אספקה של ראיות הולמות עבור הזהות שלכם ({התאימו את הטקסט כדי לשקף את המדיניות שלכם לצורך זה, לרוב נקבל צילום של הדרכון שלכם באישור נוטריון, יחד עם עותק מקורי של חשבון שירות בו ניתן לראות את הכתובת הנוכחית שלכם}).'
              }
              {'\n'}
            </Text>
            <Text style={styles.policy}>
              אנחנו עשויים לסרב למסור פרטים אישיים שאתם מבקשים עד למידה המורשית על
              פי חוק.{'\n'}
            </Text>
            <Text style={styles.policy}>
              אתם יכולים להורות לנו בכל עת לא לעבד את הפרטים האישיים שלכם לצורכי
              שיווק.{'\n'}
            </Text>
            <Text style={styles.policy}>
              בפועל, בדרך כלל תבטאו הסכמה מראש לשימוש שלנו בפרטים האישיים שלכם
              למטרות שיווק, או שאנחנו נספק לכם אפשרות לבחור שלא יעשה בפרטים
              האישיים שלכם שימוש למטרות שיווקיות.{'\n'}
            </Text>

            <Text style={styles.subTitle}>יא. אתרים צד ג’{'\n'}</Text>
            <Text style={styles.policy}>
              האתר שלנו כולל קישורים חיצוניים, ופרטים על, אתרים צד ג’. אין לנו
              שליטה על, ואיננו אחראים על, מדיניות הפרטיות והנהלים של כל צד ג’.
              {'\n'}
            </Text>

            <Text style={styles.subTitle}>יב. אתרים צד ג’{'\n'}</Text>
            <Text style={styles.policy}>
              האתר שלנו כולל קישורים חיצוניים, ופרטים על, אתרים צד ג’. אין לנו
              שליטה על, ואיננו אחראים על, מדיניות הפרטיות והנהלים של כל צד ג’.
              {'\n'}
            </Text>

            <Text style={styles.subTitle}>יג. עדכון מידע{'\n'}</Text>
            <Text style={styles.policy}>
              אני הודיעו לנו אם יש צורך לתקן או לעדכן את הפרטים האישיים שאנו
              מחזיקים עליכם.{'\n'}
            </Text>

            <Text style={styles.subTitle}>יד. עוגיות{'\n'}</Text>
            <Text style={styles.policy}>
              {
                'האתר שלנו משתמש בעוגיות. עוגייה היא קובץ המכיל מזהה (מחרוזת של אותיות ומספרים) שנשלח על ידי שרת אינטרנט לדפדפן אינטרנט ומאוחסן בדפדפן. אז, המזהה נשלח בחזרה לשרת בכל פעם שהדפדפן מבקש מהשרת להציג דף אינטרנט. עוגיות יכולות להיות או עוגיות “עיקשות” או עוגיות “פעולה” (session): עוגייה עיקשת תאוחסן בדפדפן שלכם ותישאר בתוקף עד תאריך התפוגה שנקבע לה, אלא אם תימחק על ידי המשתמש לפני תאריך התפוגה; עוגיית פעולה, מאידך, תפוג בסוף זמן הגלישה הנוכחי שלכם, כשתסגרו את הדפדפן. בדרך כלל עוגיות לא כוללות מידע שמזהה משתמשים אישית, אבל פרטים אישיים שאנחנו מאחסנים הנוגעים עליכם יכולים להיות מקושרים למידע המאוחסן והמתקבל מתוך עוגיות. {בחרו בניסוח המדויק אנחנו משתמשים רק בעוגיות פעולה / רק בעוגיות עיקשות / גם בעוגיות פעולה וגם בעוגיות עיקשות באתר שלנו.}'
              }
              {'\n'}
            </Text>
            <Text style={styles.policy}>
              {'\n'}1. השמות של העוגיות בהן אנחנו משתמשים באתר שלנו, והמטרות לשמן
              הן בשימוש, מפורטות מטה:{'\n'}
            </Text>
            <Text style={styles.policy}>
              {
                '2. אנחנו משתמשים בשירותי Google Analytics ו-Adwords באתר שלנו כדי לזהות מחשב כשמשתמש {כללו את כל השימושים הקיימים לעוגיות באתר שלכם מבקר באתר / לעקוב אחרי משתמשים בזמן השימוש שלהם באתר / לאפשר לנו להשתמש בעגלת קניות באתר / לשפר את נוחות השימוש באתר / לנתח את השימוש '
              }
            </Text>
            <Text style={styles.policy}>
              {
                'באתר / לנהל את האתר / למנוע הונאה ולשפר את האבטחה של האתר / להתאים אישית את האתר לכל משתמש / להשתמש בפרסומות ממוקדות שעשויות לעניין במיוחד משתמשים מסוימים / תארו את המטרה/ות};'
              }
            </Text>
            <Text style={styles.policy}>
              {'\n'}3. רוב האתרים מאפשרים לכם לסרב לשימוש בעוגיות—למשל:{'\n'}
            </Text>
            <Text style={styles.policy}>
              4. באינטרנט אקספלורר (גרסה 10) אתם יכולים לחסום עוגיות בעזרת הגדרות
              עקיפת הטיפול בעוגיות הזמינות באמצעות לחיצה על “כלים,” “אפשרויות
              אינטרנט,” “פרטיות,” ואז “מתקדם”;{'\n'}
            </Text>
            <Text style={styles.policy}>
              5. בפיירפוקס (גרסה 24) אתם יכולים לחסום את כל העוגיות באמצעות לחיצה
              על “כלים,” “אפשרויות,” “פרטיות,” ובחירה של “השתמש בהגדרות מותאמות
              אישית עבור היסטוריה” מתוך התפריט הנפתח, ואז ביטול הזימון של “קבל
              עוגיות מאתרים”;{'\n'}
            </Text>
            <Text style={styles.policy}>
              6. ובכרום (גרסה 29), אתם יכולים לחסום את כל העוגיות באמצעות כניסה
              לתפריט “התאמה אישית ובקרה,” ואז ללחוץ על “הגדרות,” “הצג הגדרות
              מתקדמות,” ו-“הגדרות תוכן,” ואז לבחור באפשרות “חסום אתרים מהגדרה של
              נתונים” תחת הכותרת “עוגיות.”{'\n'}
            </Text>
            <Text style={styles.policy}>
              לחסימה של כל העוגיות תהיה השפעה שלילית על נוחות השימוש של אתרים
              רבים. אם תחסמו עוגיות, לא תוכלו להשתמש בכל האפשרויות שבאתר שלנו.
              {'\n'}
            </Text>
            <Text style={styles.policy}>
              1. אתם יכולים למחוק עוגיות שכבר מאוחסנות במחשב שלכם—למשל:{'\n'}
            </Text>
            <Text style={styles.policy}>
              2. בדפדפן אינטרנט אקספלורר (גרסה 10), אתם צריכים למחוק קבצי עוגיות
              ידנית (תוכלו למצוא הוראות לכך בכתובת
              http://support.microsoft.com/kb/278835 );{'\n'}
            </Text>
            <Text style={styles.policy}>
              3. בפיירפוקס (גרסה 24), אתם יכולים למחוק עוגיות באמצעות לחיצה על
              “כלים,” “אפשרויות,” ו-“פרטיות”, ואז לבחור “השתמש בהגדרות מותאמות
              אישית עבור היסטוריה”, וללחוץ על “הצג עוגיות,” ואז “הסר את כל
              העוגיות”;{'\n'}
            </Text>
            <Text style={styles.policy}>
              4. בכרום (גרסה 29), אתם יכולים למחוק את כל העוגיות באמצעות כניסה
              לתפריט “התאמה אישית ובקרה,” ואז ללחוץ על “הגדרות,” “הצג הגדרות
              מתקדמות,” ו-“נקה נתוני גלישה,” ואז לבחור באפשרות “מחק עוגיות ונתונים
              אחרים של אתרים ותוספים,” ולבסוף ללחוץ “נקה נתוני גלישה.”
              {'\n'}
            </Text>
            <Text style={styles.policy}>
              5. למחיקה של עוגיות תהיה השפעה שלילית על נוחות השימוש של אתרים רבים.
              {'\n'}
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

export default connect(mapStateToProps, mapDispatchToProps)(Policy);