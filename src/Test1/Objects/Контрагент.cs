﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Контрагент.
    /// </summary>
    // *** Start programmer edit section *** (Контрагент CustomAttributes)

    // *** End programmer edit section *** (Контрагент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КонтрагентE", new string[] {
            "КодКлиента as \'Код клиента\'",
            "ФИО as \'ФИО\'",
            "НомерТел as \'Номер тел\'"})]
    [View("КонтрагентL", new string[] {
            "КодКлиента as \'Код клиента\'",
            "ФИО as \'ФИО\'",
            "НомерТел as \'Номер тел\'"})]
    public class Контрагент : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодКлиента;
        
        private string fФИО;
        
        private int fНомерТел;
        
        // *** Start programmer edit section *** (Контрагент CustomMembers)

        // *** End programmer edit section *** (Контрагент CustomMembers)

        
        /// <summary>
        /// КодКлиента.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.КодКлиента CustomAttributes)

        // *** End programmer edit section *** (Контрагент.КодКлиента CustomAttributes)
        public virtual int КодКлиента
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.КодКлиента Get start)

                // *** End programmer edit section *** (Контрагент.КодКлиента Get start)
                int result = this.fКодКлиента;
                // *** Start programmer edit section *** (Контрагент.КодКлиента Get end)

                // *** End programmer edit section *** (Контрагент.КодКлиента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.КодКлиента Set start)

                // *** End programmer edit section *** (Контрагент.КодКлиента Set start)
                this.fКодКлиента = value;
                // *** Start programmer edit section *** (Контрагент.КодКлиента Set end)

                // *** End programmer edit section *** (Контрагент.КодКлиента Set end)
            }
        }
        
        /// <summary>
        /// НомерТел.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.НомерТел CustomAttributes)

        // *** End programmer edit section *** (Контрагент.НомерТел CustomAttributes)
        public virtual int НомерТел
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.НомерТел Get start)

                // *** End programmer edit section *** (Контрагент.НомерТел Get start)
                int result = this.fНомерТел;
                // *** Start programmer edit section *** (Контрагент.НомерТел Get end)

                // *** End programmer edit section *** (Контрагент.НомерТел Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.НомерТел Set start)

                // *** End programmer edit section *** (Контрагент.НомерТел Set start)
                this.fНомерТел = value;
                // *** Start programmer edit section *** (Контрагент.НомерТел Set end)

                // *** End programmer edit section *** (Контрагент.НомерТел Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.ФИО CustomAttributes)

        // *** End programmer edit section *** (Контрагент.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.ФИО Get start)

                // *** End programmer edit section *** (Контрагент.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Контрагент.ФИО Get end)

                // *** End programmer edit section *** (Контрагент.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.ФИО Set start)

                // *** End programmer edit section *** (Контрагент.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Контрагент.ФИО Set end)

                // *** End programmer edit section *** (Контрагент.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КонтрагентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентE", typeof(IIS.Test1.Контрагент));
                }
            }
            
            /// <summary>
            /// "КонтрагентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентL", typeof(IIS.Test1.Контрагент));
                }
            }
        }
    }
}
