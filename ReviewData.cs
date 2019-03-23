using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Text;
using Microsoft.Office.Interop.Excel;
using System.IO;
using OfficeOpenXml;
using ReviewExplorer.Controllers;
using System.Data;
using DataTable = System.Data.DataTable;

namespace ReviewExplorer.Models
{
    public class ReviewData
    {
      [Required]
      [StringLength(255)]
      public string Text { get; set; }
      
      public List<string> OpinionList { get; set; }



    }
}