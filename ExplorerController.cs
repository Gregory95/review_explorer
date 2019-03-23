using Microsoft.Office.Interop.Excel;
using ReviewExplorer.Models;
using System.Collections.Generic;
using System.Web;
using System.Web.Mvc;
using Excel = Microsoft.Office.Interop.Excel;


namespace ReviewExplorer.Controllers
{
    public class ExplorerController : Controller
    {
        // GET: Review Explorer
        [RequireHttps]
        [Route("Explorer/ExplorerView")]
        public ActionResult ExplorerView(ReviewData review)
        {
            return View("ExplorerView");
        }

        [HttpPost]
        [RequireHttps]
        [Route("Explorer/ImportData")]
        public ViewResult ImportData(HttpPostedFileBase excelFile)
        {

            if (excelFile == null || excelFile.ContentLength == 0)
            {
                ViewBag.Error = "ERROR! \t";
                return View("ExplorerView");
            }
            else
            {
                var opinionList = new List<ReviewData>(100);
                if (excelFile.FileName.EndsWith("xls") || excelFile.FileName.EndsWith("xlsx"))
                {
                    var path = Server.MapPath("~/Content/" + excelFile.FileName);
                    if (System.IO.File.Exists(path))
                        System.IO.File.Delete(path);
                    excelFile.SaveAs(path);
                    //read data from excel file
                    Application application = new Application();
                    Workbook workbook = application.Workbooks.Open(path);
                    Worksheet worksheet = workbook.ActiveSheet;
                    Excel.Range range = worksheet.UsedRange;
                    for (var row = 1; row < range.Rows.Count; row++)
                    {
                        var opinion = new ReviewData
                        {
                            Text = ((Excel.Range)range.Cells[row, 2]).Text,
                        };
                        opinionList.Add(opinion);
                    }
                    ViewBag.ListReviews = opinionList;
                    return View("ReadData");

                }
                else
                {
                    ViewBag.Error = "File type is incorrect \t\t<br>";
                    return View("ExplorerView");
                }
            }
        }
    }
}

